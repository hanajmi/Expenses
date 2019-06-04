namespace ExpensesApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial_migration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Entries",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        descriotion = c.String(),
                        is_expense = c.Boolean(nullable: false),
                        value = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Entries");
        }
    }
}
