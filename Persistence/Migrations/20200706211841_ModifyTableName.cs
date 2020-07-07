using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ModifyTableName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Transaction",
                table: "Transaction");

            migrationBuilder.RenameTable(
                name: "Transaction",
                newName: "transaction");

            migrationBuilder.RenameColumn(
                name: "Value",
                table: "transaction",
                newName: "value");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "transaction",
                newName: "type");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "transaction",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "transaction",
                newName: "date");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "transaction",
                newName: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_transaction",
                table: "transaction",
                column: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_transaction",
                table: "transaction");

            migrationBuilder.RenameTable(
                name: "transaction",
                newName: "Transaction");

            migrationBuilder.RenameColumn(
                name: "value",
                table: "Transaction",
                newName: "Value");

            migrationBuilder.RenameColumn(
                name: "type",
                table: "Transaction",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Transaction",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "date",
                table: "Transaction",
                newName: "Date");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Transaction",
                newName: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Transaction",
                table: "Transaction",
                column: "Id");
        }
    }
}
