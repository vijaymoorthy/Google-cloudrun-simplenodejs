# Steps to deploy in google Cloud run
## 1 . git clone 
###git clone https://github.com/vijaymoorthy/Google-cloudrun-simplenodejs
![image](https://github.com/vijaymoorthy/Google-cloudrun-simplenodejs/assets/5792365/4ae209ca-4f9d-4949-b3b7-116806c47aed)
## 2. docker build
 ### cd Google-cloudrun-simplenodejs/
 ### create google artifact
 ![image](https://github.com/vijaymoorthy/Google-cloudrun-simplenodejs/assets/5792365/b7ceeffe-2bf0-45c7-b495-b51be9877a18)

### docker build . -t australia-southeast2-docker.pkg.dev/proj-kub-project/mysampleapp/myapp:blue  (create the artifact)
 ![image](https://github.com/vijaymoorthy/Google-cloudrun-simplenodejs/assets/5792365/6a3e8ac1-11dd-4145-88f2-b01792229edf)

### docker push australia-southeast2-docker.pkg.dev/proj-kub-project/mysampleapp/myapp:blue
![image](https://github.com/vijaymoorthy/Google-cloudrun-simplenodejs/assets/5792365/2d8cb3f8-5aba-4db5-b2c1-9ac5313276d4)

### deploy to cloud run 
#### gcloud run deploy myapp --image australia-southeast2-docker.pkg.dev/proj-kub-project/mysampleapp/myapp:blue
![image](https://github.com/vijaymoorthy/Google-cloudrun-simplenodejs/assets/5792365/776e7f60-9ede-47e5-884b-5d6a9754666e)

