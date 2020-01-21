namespace DemoAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Meetings",
                c => new
                    {
                        MeetingId = c.Int(nullable: false, identity: true),
                        MeetingSubject = c.String(),
                        MeetingAgenda = c.String(),
                        MeetingTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.MeetingId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Meetings");
        }
    }
}
