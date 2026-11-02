# REST API Testing

The REST API was tested locally using PowerShell and curl.

## Endpoint Tests

| Method | Endpoint | Expected Result | Status |
|---|---|---|---|
| GET | `/api/resources` | Return all resources | 200 OK |
| GET | `/api/resources/1` | Return one resource | 200 OK |
| POST | `/api/resources` | Create a resource | 201 Created |
| PUT | `/api/resources/1` | Update a resource | 200 OK |
| DELETE | `/api/resources/2` | Delete a resource | 200 OK |
| GET | `/api/resources/999` | Return an error for a missing resource | 404 Not Found |

## Middleware

- `express.json()` parses incoming JSON request bodies.
- Custom middleware logs the timestamp, HTTP method, and requested route.

## Results

The GET, POST, PUT, and DELETE endpoints were tested successfully. The final resource list confirmed that resource 1 was updated, resource 2 was deleted, and resource 3 was created.

The missing-resource test should return `404 Not Found`.