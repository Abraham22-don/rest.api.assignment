REST API Testing Summary

I tested my REST API using the VS Code terminal with PowerShell and curl commands.

1. GET All Resources
Command: curl.exe http://localhost:3000/api/resources
Expected Status: 200 OK
Result: Successfully returned all resources.

2. GET One Resource
Command: curl.exe http://localhost:3000/api/resources/1
Expected Status: 200 OK
Result: Successfully returned one resource.

3. POST Create Resource
Command:
$body = '{"name":"Finish project","completed":false}'
Invoke-RestMethod -Uri "http://localhost:3000/api/resources" -Method Post -ContentType "application/json" -Body $body

Expected Status: 201 Created
Result: Successfully created a new resource with a unique ID.

4. PUT Update Resource
Command:
$body = '{"name":"Homework finished","completed":true}'
Invoke-RestMethod -Uri "http://localhost:3000/api/resources/1" -Method Put -ContentType "application/json" -Body $body

Expected Status: 200 OK
Result: Successfully updated resource 1.

5. DELETE Resource
Command: Invoke-RestMethod -Uri "http://localhost:3000/api/resources/2" -Method Delete
Expected Status: 200 OK
Result: Successfully deleted resource 2.

6. Test Missing Resource
Command: curl.exe http://localhost:3000/api/resources/999
Expected Status: 404 Not Found
Result: The API returned "Resource not found" for a resource that does not exist.

Middleware:
The API uses express.json() to read JSON request bodies. Custom middleware logs the timestamp, request method, and requested route to the terminal.

Conclusion:
All five API endpoints were tested successfully. The API correctly handled requests and returned the expected results.