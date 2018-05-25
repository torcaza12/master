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
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public long Telefono_celular { get; set; }
        public string Correo_electronico { get; set; }
        public Deudor GetDeudorByID(long ID)
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["RecuperosYMandatos"].ConnectionString;
            Deudor unDeudor = new Deudor();
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", ID);
                cmd.CommandText = "[Deudores_Buscar]";
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    unDeudor.ID = Convert.ToInt64(rdr["ID"]);
                    unDeudor.IdEmpresa = Convert.ToInt64(rdr["IdEmpresa"]);
                    unDeudor.Apellido = string.IsNullOrEmpty(rdr["Apellido"].ToString()) ? "" : rdr["Apellido"].ToString();
                    unDeudor.Nombre = string.IsNullOrEmpty(rdr["Nombre"].ToString()) ? "" : rdr["Nombre"].ToString();
                }
                return unDeudor;
            }
        }
        public void SaveOrUpdate(Deudor unDeudor)
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["RecuperosYMandatos"].ConnectionString;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", unDeudor.ID);
                cmd.Parameters.AddWithValue("@Apellido", unDeudor.Apellido);
                cmd.Parameters.AddWithValue("@Nombre", unDeudor.Nombre);
                cmd.Parameters.AddWithValue("@Telefono_celular", unDeudor.Telefono_celular);
                cmd.Parameters.AddWithValue("@Correo_electronico", unDeudor.Correo_electronico);
                cmd.CommandText = "[Deudores_Grabar]";
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }
    }

   
}