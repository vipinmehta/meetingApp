namespace DemoAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Meetings", "Attendees", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Meetings", "Attendees");
        }
    }
}
