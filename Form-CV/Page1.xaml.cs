using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace App1
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Page1 : ContentPage
    {
        public Page1(String nombre, String fecha, String ocupacion, String telefono, String email, String aptitud, String experiencia1, string experiencia2, String formacion1, string formacion2)
        {
            InitializeComponent();

            labelNombre.Text = nombre + "\n" + ocupacion;
            labelFecha.Text = "Fecha de nacimiento:\n" + fecha;
            labelTelefono.Text = "Telefono:\n" + telefono;
            labelEmail.Text = "Email:\n" + email;
            labelAptitud.Text = "Soy un " + ocupacion + " titulado. Mi objetivo es ser util otorgando mis conocimientos en el area dada. Soy " + aptitud + ".\n";
            labelExperiencia.Text = "Experiencia Laboral:\n" + experiencia1 + "\n" +experiencia2;
            labelFormacion.Text = "Formacion Academica:\n" + formacion1 + "\n" + formacion2;

        }

        public Page1()
        {
            InitializeComponent();


        }
    }
}