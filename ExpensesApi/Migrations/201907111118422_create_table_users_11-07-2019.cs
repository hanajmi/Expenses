namespace ExpensesApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class create_table_users_11072019 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        userName = c.String(),
                        password = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
        }
    }
}
