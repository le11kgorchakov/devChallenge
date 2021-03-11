# Launch MSSQL and send it to the background
/opt/mssql/bin/sqlservr &
pid=$!

# Wait for it to be available
echo "⏳ Waiting for MS SQL to be available ⏳"
/opt/mssql-tools/bin/sqlcmd -l 30 -S localhost -h-1 -V1 -U sa -P $SA_PASSWORD -Q "SET NOCOUNT ON SELECT \"TADA, WE ARE UP!\" , @@servername"
is_up=$?
while [ $is_up -ne 0 ] ; do 
  /opt/mssql-tools/bin/sqlcmd -l 30 -S localhost -h-1 -V1 -U sa -P $SA_PASSWORD -Q "SET NOCOUNT ON SELECT \"TADA, WE ARE UP!\" , @@servername"
  is_up=$?
  sleep 5 
done

# Execute DB creation script and data preseed
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P $SA_PASSWORD -i ./restore-database.sql
echo "🎉 DB restore is complete! 🎉"

wait $pid