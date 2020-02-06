namespace DemoAPI
{
    using DemoAPI.Models;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class MeetingDBContext : DbContext
    {
        // Your context has been configured to use a 'MeetingDBContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'DemoAPI.MeetingDBContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'MeetingDBContext' 
        // connection string in the application configuration file.
        public MeetingDBContext()
            : base("name=MeetingDBContext")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

         public virtual DbSet<Meeting> Meetings { get; set; }

    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}