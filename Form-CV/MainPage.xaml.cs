using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App1
{
    public partial class MainPage : ContentPage
    {
        public string userNombre { get; set; }
        public string userFecha { get; set; }
        public string userOcupacion{ get; set; }
        public string userTelefono { get; set; }
        public string userEmail { get; set; }
        public string userAptitud { get; set; }
        public string userExperiencia1 { get; set; }
        public string userExperiencia2 { get; set; }
        public string userFormacion1 { get; set; }
        public string userFormacion2 { get; set; }

        public MainPage()
        {
            InitializeComponent();
        }

        async void InformacionAgregada(object sender, EventArgs e)
        {
            userNombre = entryNombre.Text;
            userFecha = entryFecha.Text;
            userOcupacion = entryOcupacion.Text;
            userTelefono = entryTelefono.Text;
            userEmail = entryEmail.Text;
            userAptitud = entryAptitud.Text;
            userExperiencia1 = entryExperiencia1.Text;
            userExperiencia2 = entryExperiencia2.Text;
            userFormacion1 = entryFormacion1.Text;
            userFormacion2 = entryFormacion2.Text;

            await Navigation.PushAsync(new Page1(userNombre, userFecha, userOcupacion, userTelefono, userEmail, userAptitud,userExperiencia1,userExperiencia2,userFormacion1, userFormacion2));
        }

    }


}