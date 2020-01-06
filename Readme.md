This project is a demo of [React Camera Extended](https://github.com/decabits/react-camera-extended)

# Getting Started

1. `npm install`
2. `EMAIL_USERNAME=<gmail_email> EMAIL_PASSWORD=<gmail password> npm start`
3. Curl -

```
curl -X POST \
  http://localhost:3000/images/ \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 20' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: c68b432f-555b-4b4c-a8cd-710c6f9c3e0a,9055051d-4b38-4bb8-b3ef-13933d73869a' \
  -H 'User-Agent: PostmanRuntime/7.20.1' \
  -H 'cache-control: no-cache' \
  -d '{ "image": "imageUrl or Data" }'
```

# Technologies & References

[Express](https://expressjs.com/)
[Enable Less Secure Apps Gmail](https://hotter.io/docs/email-accounts/secure-app-gmail/)
