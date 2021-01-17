# mikedidomizio.com

## sync from S3
From parent directory

`aws s3 cp s3://www.mikedidomizio.com mikedidomizio.com --recursive`

## development
Development is easiest by mocking a server and accessing the URL through your browser

- install [watch-http-server](https://www.npmjs.com/package/watch-http-server) globally
- run `watch-http-server -a 192.168.0.230 -p 8080` or use different address/port
- access the URL through your browser
- caching seems to be occurring with styling so use "Disable cache" in the Network panel
