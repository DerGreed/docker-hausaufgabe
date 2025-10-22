# Simple Counter with React
## Build from scratch
1. (`npm set init-type=module` global setting to use ES Module)
2. `npm create vite@latest` -> choose React and Javascript
3. create your app (check live with `npm run dev`)
4. `npm run build` creates HTML, CSS, JS in `dist/`
5. create `Dockerfile`
   - ngnix image
   - copy local `dist/` into `/usr/share/nginx/html` in the image
   - expose port 80
#### New Vesion:
- Replace the above step 4 with a build step in the Dockerfile
## Setup
1. `docker build -t image-name:tag .`
2. `docker run --name container-name -d -p 8080:80 image-name:tag`
3. Open http://localhost:8080 (or the IP of your machine)