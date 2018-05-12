using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace RecuperosYMandatos.Models
{
    public class Deudor
    {
        public long ID { get; set; }
        public long IdEmpresa { get; set; }

        public Deudor GetDeudorByID(long ID)
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["RecuperosYMandatos"].ConnectionString;
            Deudor unDeudor = new Deudor();
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "[Deudores_Buscar]";
                //add any parameters the stored procedure might require
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    unDeudor.ID = Convert.ToInt64(rdr["ID"]);
                    unDeudor.IdEmpresa = Convert.ToInt64(rdr["IdEmpresa"]);
                }
                return unDeudor;
            }
        }
    }

   
}