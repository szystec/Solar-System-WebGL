       function handleLoadedTexture(texture) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
   
   var texturesStack = [];
    function initTexture() {
        //0 Galaxy
        var galaxyTexture = gl.createTexture();
        galaxyTexture.image = new Image();
        galaxyTexture.image.onload = function () {
            handleLoadedTexture(galaxyTexture);
        }
        galaxyTexture.image.src = "textures/galaxy.jpg";
        texturesStack.push(galaxyTexture);
        
        //1 Sun
        var sunTexture = gl.createTexture();
        sunTexture.image = new Image();
        sunTexture.image.onload = function () {
            handleLoadedTexture(sunTexture);
        }
        sunTexture.image.src = "textures/sunmap.jpg";
        texturesStack.push(sunTexture);
        
        //2 Mercury
        var mercuryTexture = gl.createTexture();
        mercuryTexture.image = new Image();
        mercuryTexture.image.onload = function () {
            handleLoadedTexture(mercuryTexture);
        }
        mercuryTexture.image.src = "textures/mercurymap.jpg";
        texturesStack.push(mercuryTexture); 
        
        //3 Venus
        var venusTexture = gl.createTexture();
        venusTexture.image = new Image();
        venusTexture.image.onload = function () {
            handleLoadedTexture(venusTexture);
        }
        venusTexture.image.src = "textures/venusmap.jpg";
        texturesStack.push(venusTexture);
        
        //4 Earth
        var earthTexture = gl.createTexture();
        earthTexture.image = new Image();
        earthTexture.image.onload = function () {
            handleLoadedTexture(earthTexture);
        }
        earthTexture.image.src = "textures/earthmap1k.jpg";
        texturesStack.push(earthTexture);
        
        //5 Moon
        var moonTexture = gl.createTexture();
        moonTexture.image = new Image();
        moonTexture.image.onload = function () {
            handleLoadedTexture(moonTexture);
        }
        moonTexture.image.src = "textures/moon.gif";
        texturesStack.push(moonTexture);
        
        //6 Mars
        var marsTexture = gl.createTexture();
        marsTexture.image = new Image();
        marsTexture.image.onload = function () {
            handleLoadedTexture(marsTexture);
        }
        marsTexture.image.src = "textures/marsmap1k.jpg";
        texturesStack.push(marsTexture);
        
        //7 Jupiter   
        var jupiterTexture = gl.createTexture();
        jupiterTexture.image = new Image();
        jupiterTexture.image.onload = function () {
            handleLoadedTexture(jupiterTexture);
        }
        jupiterTexture.image.src = "textures/jupitermap.jpg";
        texturesStack.push(jupiterTexture);
       
        //8 Saturn
        var saturnTexture = gl.createTexture();
        saturnTexture.image = new Image();
        saturnTexture.image.onload = function () {
            handleLoadedTexture(saturnTexture);
        }
        saturnTexture.image.src = "textures/saturnmap.jpg";
        texturesStack.push(saturnTexture);
        
        //9 Uranus
        var uranusTexture = gl.createTexture();
        uranusTexture.image = new Image();
        uranusTexture.image.onload = function () {
            handleLoadedTexture(uranusTexture);
        }
        uranusTexture.image.src = "textures/uranusmap.jpg";
        texturesStack.push(uranusTexture);
        
        //10 Neptun
        var neptunTexture = gl.createTexture();
        neptunTexture.image = new Image();
        neptunTexture.image.onload = function () {
            handleLoadedTexture(neptunTexture);
        }
        neptunTexture.image.src = "textures/neptunemap.jpg";
        texturesStack.push(neptunTexture);
        
        //11 Saturn Ring
        var ringTexture = gl.createTexture();
        ringTexture.image = new Image();
        ringTexture.image.onload = function () {
            handleLoadedTexture(ringTexture);
        }
        ringTexture.image.src = "textures/ringsRGBA.png";
        texturesStack.push(ringTexture);
        
        //12 Coulds
        var cloudTexture = gl.createTexture();
        cloudTexture.image = new Image();
        cloudTexture.image.onload = function () {
            handleLoadedTexture(cloudTexture);
        }
        cloudTexture.image.src = "textures/earthcloud.jpg";
        texturesStack.push(cloudTexture);
    }