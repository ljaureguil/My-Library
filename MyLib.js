<!DOCTYPE html>
<html lang="en">

<head>
    <title>Panorama 360</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <style>
        body {
            font-family: Monospace;
            background-color: #f0f0f0;
            color: white;
            margin: 0px;
            overflow: hidden;
        }
        #capture {
            position: absolute;
            left: 20px;
            top: 20px;
            padding: 10px;
            border: 1px solid white;
            z-index: 100;
            cursor: pointer;
            background-color: rgba(0, 0, 0, .4);
        }
        .csels {
            background: rgba(100, 100, 1000, .35);
            color: white;
        }
        button {
            margin: 5px;
            background: rgba(100, 100, 1000, .35);
            color: white;
        }
        select {
            margin: 5px;
        }
        #dparam {
            width: 100%;
            height: 100%;
            border-style: solid;
            display: none;
        }
        #params {
            width: 50%;
            height: 200px;
            background: white;
        }
        tanim {
            background-color: white;
            width: 50%;
            height: 200px;
            display: none;
        }
        #file {
            width: 80px;
            // background: url(https://icons-for-free.com/iconfiles/png/512/folder+open+icon-1320161390409087972.png);
            // background-size: 100% 100%;
            ;
        }
        #ct {
            display: none;
        }
        #smeshes {
            // background: red;
            // color: white;
        }
        #words {
            height: 40%;
            max-width: 500px;
            margin: 50px auto;
            background: white;
            border-radius: 5px;
            box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
            padding: 1rem 2rem 1rem 5rem;
            background: -webkit-gradient(linear, 0 0, 0 100%, from(#d9eaf3), color-stop(4%, #fff)) 0 4px;
            background-size: 100% 3rem;
            position: relative;
            line-height: 3rem;
            display: none;
        }
        p {
            margin: 0 0 3rem;
        }
        #words: before {
            content: '';
            position: absolute;
            width: 4px;
            top: 0;
            left: 30px;
            bottom: 0;
            border: 1px solid;
            border-color: transparent #efe4e4;
        }
        #cpp {
            color: black;
            font-size: 18px;
        }
        #bcom {
            background: blue;
        }
        .ct {
            width: 30px;
            overflow: auto;
            color: blanchedalmond;
            background: blanchedalmond;
        }
        #ilocal {
            padding: 5px;
            display: none;
            border-style: groove;
        }
        #iweb {
            padding: 5px;
            display: none;
            border-style: groove;
        }
        #accion {
            padding: 5px;
            border-style: groove;
        }
        #dbrec {
            text-align: center;
            position: absolute;
            right: 5px;
            top: 5px;
            border-width: .1;
            border-style: solid;
            overflow: auto;
        }
        #dr {
            background-color: red;
            color: white;
        }
        #drec {
            text-align: right;
            display: none;
            width: 50%;
            height: 40%;
        }
        #Video {
            height: 80%;
            width: 60%;
        }
        #binicrec {
            // display: none;
        }
        #pi {
            position: absolute;
            bottom: 4%;
            left: 3%;
        }
        #ctm{
            position: absolute;
            bottom: 0%;
           right: 0%; 
           display:none;   
        }
        #mainEditor{
            width: 100%;
            height: 80%;
            padding:12px;
   
         }
        #Editor{         padding:15px;
            overflow:auto;
            position:absolute;
            display:none;
            width:100%;
            height:100%;
            z-index:100;
        }
        #solo{
            position: absolute;
            top:2%;
            right: 1%;
        }
        #navo{width: 100%;overflow: auto;}
        #nav{
            width:400%;
      overflow:auto;
   padding: 10px 0px;background:red;
        }
        .copcs{
            background:green;
        }
        .cse{
          width:80px;
          color:white;
          background-color: teal;
        }
    </style>
</head>

<body>

    <div id="words" contenteditable>
    </div>
    <div id="todo">

        <div id="dbrec">
          
            <button id="dr" onclick="if(drec.style.display==='block' )drec.style.display='none';else drec.style.display='block';">></button>

            <div id="drec">

                Choose a Video or audio: ...
                <input type=file name=filename id=VidAud oninput="ExtractAudio(this)"></input>
                <video id="Video" onload="binicrec.style.display='block'" controls src="file:///Internal storage/Aaa.mp4"></video>
                <button id="binicrec" onclick="InicRecording(renderer.domElement)">Once Video es Loaded press to record</button>
                <button id="bstoprec" onclick="StopRecording(renderer.domElement)">Stop recording</button>
                <button id="bscreenshot" onclick="screenShot()">screenShot</button>


            </div>
        </div>
        <div id="capture">
            <span id="r"></span>
            <button id="bm" onclick="if(ct.style.display==='block')ct.style.display='none';else ct.style.display='block'">M</button>
              <button onclick="Editor.style.display='block'">Main Editor</button>

            <div id="ct">
                <button id="" onclick="if(iweb.style.display=='block' || iweb.style.display=='')iweb.style.display='none';else iweb.style.display='block'">W</button>
                <button id="" onclick="getP();if(ilocal.style.display=='block' || ilocal.style.display=='')ilocal.style.display='none';else ilocal.style.display='block'">L</button>
                <button id="" onclick="if(accion.style.display=='block' || accion.style.display=='')accion.style.display='none';else accion.style.display='block'">A</button>

                <button id="capturea">Capture</button>
                <button id="bc" onclick="if(bcast){bcast=false;bc.style.background='red'}else {bcast=true;bc.style.background='green'}" style="background:green;color:white">Cast</button>
                <div id="iweb">
                    <br>Texture URL
                    <input type=text name=filename id=TextureURL class=cte></input>
                    <button onclick="test('TextureURL')">Apply</button>
                    </button>
                    <br>Texture Bump
                    <input type=text name=filename id=TextureBump class=cte></input>
                    <button onclick="test('TextureBump')">Apply</button>
                    </button>
                    <br>Texture Specular
                    <input type=text name=filename id=TextureSpecular class=cte></input>
                    <button onclick="test('TextureSpecular')">Apply</button>

                </div>
                <br>
                <div id="ilocal">
                    <br>Texture
                    <input type=file name=filename id=Texture oninput="test('Texture')" class=cte></input>
                    <br>Bump

                    <input type=file name=filename id=Bump oninput="test('Bump')" class=cte></input>
                    <br>Specular
                    <input type=file name=filename id=Specular oninput="test('Specular')" class=cte></input>
                </div>
                <br>
                <div id="accion">
                    <select class="csels" id="stextures" onchange="selT(this.value)">
                        <option>Choose Texture</option>
                    </select>
                    <select id="meshes" class="csels" onchange="chooseMesh(this.value)">
                        <option>Create Object</option>
                        <option>Group</option>
                        <option>Box</option>
                        <option>Sphere</option>
                        <option>Line</option>
                        <option>Cylinder</option>
                        <option>Label</option>
                        <option>Torus</option>

                    </select>
                    <button onclick="chooseMesh(meshes.value)">Cr.</button>
                    <select class="csels" id="smeshes" onchange="selMesh(this.value)">
                        <option>Choose Object</option>
                    </select>

                    <select class="csels" id="sproyestos" onchange="selProy(this.value)">
                        <option>Choose Scene</option>
                    </select>

                    <button onclick="editMesh()">Editor</button>
                    <button onclick="if(blight)blight=false;else blight=true">Light</button>
                    <button onclick='if (!bsp) {runSpeechRecognition();bcom.style.background = "green";bsp = true;} else {bcom.style.background = "blue";bsp = false;};SetVr();'>VR</button>
                    <button id="bcom" onclick='if (!bsp) {runSpeechRecognition();bcom.style.background = "green";bsp = true;} else {bcom.style.background = "blue";bsp = false;}//inicSpeech();'>Comands</button>
                    <button onclick="saveScene()">Save Scene</button>
                    <div id="dparam" name=false>
                        <button onclick="applay(params.value)">Apply</button>
                        <button onclick="dparam.style.display='none'">close</button>
                        <textarea id="params"></textarea>
                        <button onclick="delM()" style="background:red;color:white">Delete</button>
                        <button onclick="alert('Choose Object');addTo=true;" style="background:gray;color:white">Add To</button>
                       


                    </div>

                </div>
            </div>
        </div>
    </div>
    <p id="pi">muestra</p>
    <div id="ctm">
x <input type="range" id="rax" value=0 min=-5 max=5 oninput="eyes.name.mx=this.value"></input>
y <input type="range" id="ray" value=0 min=-5 max=5 oninput="eyes.name.my=this.value"></input>
z <input type="range" id="raz" value=0 min=-5 max=5 oninput="eyes.name.mz=this.value"></input>
gx <input type="range" id="ragx" value=0 min=-3.1416 max=3.1416 step=.001 oninput="eyes.name.ry=this.value"></input>


f <input type="range" id="rafa" value=1 min=0 step=.01 max=5 oninput="eyes.name.factor=this.value"></input>

    </div>
<div id="Editor">
    <textarea id="mainEditor"></textarea>
    <div id="navo">
    <div id="nav" >
        Local<select id="sproy" oninput="openProy(this.value)" class="cse"></select><button onclick="openProy(sproy.value)" class="copcs">></button>
        <button id="bdelpl" onclick="delproyl()"  style="background: blue;" class="copcs">Del</button>
 
        Web<select id="sproyw" oninput="openProyw(this.value)" class="cse"></select><button onclick="openProyw(sproyw.value)" class="copcs">></button>
         <button id="bdelp" onclick="delproy()"  style="background: blue;" class="copcs">Del</button>
    Objects<select id="selo" oninput="addtxt(this.value)//addtxt(this.value)" class="cse">
        <option>Sel opc.</option>
        <option>Mesh</option>
        <option>Geometry</option>
        <option>Material</option>
        <option>Group</option>
        <option>BufferGeometry</option>
        <option>gBox</option>
        <option>gSphere</option>
        <option>gCylinder</option>
        <option>gTorus</option>
        <option>gPlane</option>
        <option>gRing</option>
        <option>Texture Util</option>
        <option>Texture Loader</option>
        <option>Add to esena</option>
        <option></option>
        <option>cutMesh(from, ob)</option>
        <option>line(points, width, color)</option>
        <option>t_extura(pic)</option>   
        <option>adjusttexture(mate, nx, ny, ang, offsetX, offsetY)</option>
        <option>unionG(ob1, ob2)</option>
        <option>gsubtract(fromob, ob)</option>
        <option>gunion(fromob, ob)</option>
       <option>gintersection(fromob, ob)</option>


    </select>   <button onclick="addtxt(selo.value)" class="copcs">></button>
    Shorcuts<select id="shorcuts" oninput="insert(this.value)" class="cse">
            
        <option>.geometry</option>
        <option>.material</option>
        <option>.map</option>
               <option>.position</option>
         <option>.rotate</option>
        <option>THREE.</option>
        <option>new THREE.</option>
        <option>scene.add( );</option>
        <option>esena.add( );</option>
 
        <option>.x</option>
        <option>.y</option>
           <option>.x</option>

         <option>.side=THREE.DoubleSide</option>
       
     
    </select>   <button onclick="insert(shorcuts.value)" class="copcs">></button>
   Operations<select id="instr" oninput="insert(this.value)"  class="cse">
            <option>var </option>
        <option>if( ){ };<br>else{ }</option>
        <option>for(var i=0;i< ;i++){ }</option>
         <option>function a(){  }</option>       
        <option>Math.</option>
        <option>PI</option>
         <option>Math.sin( )</option>
         <option>Math.cos( )</option>
         <option>Math.tan( )</option>
         <option>Math.asin( )</option>
         <option>Math.acos( )</option>
         <option>Math.atan( )</option>
         <option>Math.rand( )</option>      
     
    </select><button onclick="insert(instr.value)" class="copcs">></button>
    
    LJL Object<select id="punt" oninput="insert(this.value)"  class="cse" >

        <option>var ljl=new LJL()</option>  
            <option>ljl.point( x, y, z)</option>
        <option>ljl.lineSegments(points, width, color)</option>
         <option>ljl.line(points, width, color)</option>
     <option>ljl.dashedLine(points, width, color, size, gap)</option>
  
      <option>ljl.Tag(msg, W, color, params)</option>
        <option>ljl.toRadians(ang)</option>
       <option>ljl.toDeg(ang)</option>
       <option>ljl.chromeMaterial = function(cubeCam, color).</option>
       <option>,</option>



         
        <option>+</option>
       <option>-</option>
        <option>/</option>
       <option>*</option>
       <option>.</option>
       <option>,</option>
       <option>;</option>
        <option>"</option>
        <option>'</option>
        <option>:</option>
        <option>//</option>   
        <option>{</option>
        <option>}</option>
        <option>[</option>
        <option>]</option>


    </select><button onclick="insert(punt.value)" class="copcs">></button>
    Structural<select id="structura" oninput="insert(this.value)"  class="cse" >

        <option>var str=new structural()</option>
  
 
         <option>str.flat(w, l, tk, texture, color, center, buffer)</option>
        <option>str.plate(w, l, tk, texture, color, center, buffer)</option>
        <option>str.anglee(w, l, tk, texture, color, center, buffer)</option>
      <option>str.angle(l1, l2, lo, tk, texture, color, center, buffer)</option>
        <option>str.plateedged(w, l, tk, radius, texture, color, center, cdf, buffer)<option>
        <option>str.tube(D, l, tk, texture, color, center, cdf, buffer)</option>
        <option>str.pipe(D, l, tk, texture, color, center, cdf, buffer)</option>   
        <option>str.channel(w, l, h, tk, texture, color, center, buffer)</option>
        <option>str.hbeam(w, l, h, tk, texture, color, center, buffer)</option>
        <option>str.bar(D, l, texture, color, center, cdf, buffer)</option>
        <option>str.squaretubing(w, h, l, tk, texture, color, center, buffer)</option>
<option>str.squaretubingedged(l, w, h, tk, rad, texture, color, center, cdf, buffer)</option>
<option>str.textLebel(msg, W, H, center, color, toCamera, font, frame)</option>
 
       <option>str.gplate(w, l, tk, center, buffer)</option>
        <option>str.gangle(w1, w2, l, tk, center, buffer)</option>
       <option>str.gangle2(l1, l2, lo, tk, center, buffer)</option>
       <option>str.gplateedged(w, l, tk, radius, center, cdf, buffer)</option>
       <option>str.gtube(D, l, tk, center, cdf, buffer)</option>
       <option>str.gpipe(D, l, tk, center, cdf, buffer)</option>
        <option>str.gchannel(w, l, h, tk, center, buffer)</option>
        <option>str.ghbeam = function(w, l, h, tk, center, buffer)</option>
        <option>str.gbar(D, l, center, cdf, buffer)</option>
        <option>str.gsquaretubing(w, h, l, tk, center, buffer)</option>   
        <option>str.gsquaretubingedged(l, w, h, tk, rad, center, cdf, buffer)</option>
       <option>str.gGusset(w,h,tk)</option>
       <option></option>
        <option></option>

    </select><button onclick="insert(structura.value)" class="copcs">></button><br>

    <button onclick="addtrycatch()">Add Try Catch</button>
    <button onclick="mainEditor.value=''">Clear Editor</button>
          <button onclick="applayMainEditor();Editor.style.display='none';">Process</button>
        <button onclick="scene.add(axis);Editor.style.display='none'">Add Axis</button>
           <button onclick="scene.remove(axis);Editor.style.display='none'">Remove Axis</button> 
 
           <button onclick="saveEd('local')">Save Local</button>
           <button onclick="saveEd('web')">Save To Web</button>
               <button onclick="window.location.reload()">Refresh App</button>
    <button onclick="Editor.style.display='none';">Close</button>
   </div>
</div>
</div>
 <script src="https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.js"></script>
    <script src="js/ImageData-polyfill.js"></script>
    <script src="js/canvas.toBlob-polyfill.js"></script>
    <script src="js/three.min.js"></script>


    <script src="js/OrbitControls.js"></script>
    <script src="TrackballControls.js"></script>
    <script src="js/CubemapToEquirectangular.js"></script>
    <script src="DeviceOrientationControls.js"></script>
    <script src="OBJLoader.js"></script>


    <script src="textures.js"></script>
  <script src="Split Body.js"></script>
 

    <script type="text/javascript">
        //
 
        Editor.style.display='none';
        function getPaht(file) {
            var path = (window.URL || window.webkitURL).createObjectURL(file);
            alert('path', path);
            return path;
        }
    </script>


    <script>
       var liproj="https://jsonblob.com/api/1002978081803354112"
        var ObPro={}
        setupProy();
        setupProyw();
        var cStream,
            aStream,
            vid,
            recorder,
            analyser,
            dataArray,
            bufferLength,
            vc = false,
            aranim = [],
            sobs = [],
            fromob = "",
            toob = "",
            addTo = false,
            bcast = true,
            spe,proyecto;


        let clicked = false;
        let chunks = [];
        let ac;
        let osc;
        let dest;
        let mediaRecorder;


        var Esenas = [];
         //   Video.onplay=function(){
        ac = new AudioContext();
        dest = ac.createMediaStreamDestination();
        aStream = dest.stream;
        var sourceNode = ac.createMediaElementSource(Video);
        sourceNode.connect(dest);

         // output to our headphones
        sourceNode.connect(ac.destination)

         //      }
         GetJ("https://jsonblob.com/api/959920656255041536", function(ob) {
            Esenas = ob.esenas; //alert(ob.esenas.length);
            for (var i = 0; i < Esenas.length; i++) {

                sproyestos.innerHTML += "<option>" + Esenas[i].name + "</option>";
                if (Esenas[i].name != "World" && Esenas[i].name != undefined) {
                    //  applay(Esenas[i],"web")
                }
            }

        })
         var oy = {
            x: 0,
            y: 0,
            z: 15,
            vx: 0,
            vy: 0,
            vx: 0
        }
        var bsp = false,
            comando = "";
        var nota = ""
        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then(function(stream) {


                //////////////////////////////////


                window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                try {
                    /*       let p = document.createElement('textarea');
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'es-MX | en-US';
        recognition.continuous = true;

        recognition.onresult = function(event) {
            comando = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                comando += event.results[i][0].transcript;
            }
            if (event.results.length > 0) {
                if (comando != "") {
                    p.value = comando + "\n";
                    nota = comando;
                    exComando(comando)

                }
            }

        } //recognition.addEventListener('end', recognition.start);
        recognition.addEventListener('end', function() {
            //  alert(nota);
            p.value += nota + "\n\n";
            if (bps) recognition.start();
            if (vrmode) recognition.start();

        });

        words.appendChild(p);*/
                    /* JS comes here */
                    //  runSpeechRecognition();
                } catch (e) {
                    alert(e)
                }


                /////////////////////////
                ;
            })
            .
        catch (function(err) {
            alert('No mic for you!');
            // runSpeechRecognition()
        });


        var pr1, pr2, pr3, blight = false,
            vrmode = false,
            gap = .75
        var equi;
        var ObSelected = null;

        var container, stats;
        var camera, scene, renderer;
        var controls;

        var radius = 100,
            INTERSECTED,
            theta = 0;

        window.addEventListener('load', function() {
            init();

        });
        var eyes = new THREE.Group();
        controlsr = new THREE.DeviceOrientationControls(eyes);
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        function fraycast(event) {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
        var cubeCamera;
        var textureLoader = new THREE.TextureLoader();
        var light = new THREE.DirectionalLight(0xaaaaaa, .71);
        camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);


        camera.position.set(0, 0, 1);
         // 
        cameral = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
        camerar = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);

        cameral.position.x = -gap;
        camerar.position.x = gap;
        cameral.lookAt(0, -100, 0);
        cameral.lookAt(0, -100, 0);

        eyes.add(cameral);
        eyes.add(camerar);
         //   eyes.add(new THREE.Vector3( 0, 0, 0 ))
        eyes.position.x = oy.x;
        eyes.position.y = oy.y;
        eyes.position.z = oy.z;
        eyes.lookAt(camera.position)
        var me = {};
        me.mx = 0;
        me.my = 0;
        me.mz = 0;
        me.esc = 1;
        me.rx = 0;
        me.ry = 0;
        me.rz = 0;
        me.factor = .01;
        me.pos = oy;
        eyes.name = me,
        esena=null;
        /////
        var _jl=new LJL();
        var axis=new THREE.Group();

axis.add(_jl.line([_jl.point(0,500,0),_jl.point(0,-500,0)],3,0x00FF00));

axis.add(_jl.line([_jl.point(500,0,0),_jl.point(-500,0,0)],3,0x0000FF));

axis.add(_jl.line([_jl.point(0,0,500),_jl.point(0,0,-500)],3,0xFF0000));




        function init() {

            container = document.createElement('div');
            document.body.appendChild(container);

            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.set(0, 0, -10);
            esena = new THREE.Group();
            scene = new THREE.Scene();
            scene.add(esena)
            //////////////////////////////////
            s = new THREE.Mesh(
                new THREE.SphereGeometry(1, 16, 16),
                new THREE.MeshPhongMaterial({
                      color: "#00ff00"
                })
            );
            light4 = new THREE.PointLight(0xffffff, 2, 500);
            light4.add(s);
            scene.add(light4);
              scene.add(eyes);
            light.position.set(1, 1, 1); //.normalize();
            scene.add(light);

            alight = new THREE.AmbientLight(0x888888);
            scene.add(alight)

            textureLoader.load(art[0].pic, function(texture) {

                texture.mapping = THREE.UVMapping;

                matworld1 = new THREE.MeshBasicMaterial({
                    side: THREE.DoubleSide,
                    map: texture,
                    transparent: true,
                    opacity: 1 //.450
                });
                world1 = new THREE.Mesh(new THREE.SphereBufferGeometry(900, 312, 116), matworld1);
                world1.scale.x = -1;
                world1.name = "world";
                world1.name = {
                    name: "World",
                    r: 900,
                    sx: 312,
                    sy: 116,
                    x: 0,
                    y: 0,
                    z: 0,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    rpx: 1,
                    rpy: 1,
                    ofx: 0,
                    ofy: 0,
                    rot: 0,
                    piv: "",
                    pic: "".pic
                }
                scene.add(world1); //scene.add(world1);
                renderer.setClearColor(0xff0000, .3);

                
            })



            renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            renderer.setClearColor(0xf0f0f0);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.sortObjects = false;
            container.appendChild(renderer.domElement);
            renderer.setScissorTest(false);
            equi = new CubemapToEquirectangular(renderer, true);
            setUpSels();
            //     controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls = new THREE.TrackballControls(camera, renderer.domElement); //camera
            //  setTimeout(function(){  controls = new THREE.TrackballControls( camera, renderer.domElement );},5000);

            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;

            controls.keys = ['KeyA', 'KeyS', 'KeyD'];
            window.addEventListener('resize', onWindowResize, false);
            onWindowResize();

            document.getElementById('capturea').addEventListener('click', function(e) {

                equi.update(camera, scene);

            });

            renderer.domElement.addEventListener('click', fraycast); // document.addEventListener("click", onPointerMove );//, false
 
            animate();
        }

        function selT(v) {

            for (var i = 0; i < art.length; i++) {
                if (art[i].name === v) {
                    ObSelected.material.map = THREE.ImageUtils.loadTexture(art[i].pic);
                    i = art.length;
                }

            }

        }

        function setUpSels() {
            var s = stextures.innerHTML + "<option>";

            for (var i = 0; i < art.length; i++) {
                s += "<option>" + art[i].name + "</option>";

            }

            stextures.innerHTML = s;
            setupMeshs();
        }

        function setupMeshs() {
            var ms = scene.children;
            var s = smeshes.innerHTML;
            for (var i = 0; i < ms.length; i++) {
                if (ms[i].name != undefined) {
                    if (ms[i].length > 0) s += "<option>" + ms[i].name + "</option>";
                }
                smeshes.innerHTML = s;
            }
        }

        function chooseMesh(m) {
            if (m === "Create Object") return;
            var n = prompt("Name");
            var a = scene.children.length;

            var op = document.createElement("option");
            // op.innerHTML=n;   
            if (m === "Group") {
                var m = Group(n + a)
                scene.add(m);
                ObSelected = m;
                selMesh.value = m.name;
                op.innerHTML = m.name.name;
                smeshes.appendChild(op);
            }

            if (m === "Box") {

                var m = Box(n + a, 10, 10, 10);
                scene.add(m);
                ObSelected = m;
                selMesh.value = m.name;

                op.innerHTML = m.name.name;
                smeshes.appendChild(op);

            }
            if (m === "Sphere") {
                var m = Sphere(n + a, 5, 80, 40);
                scene.add(m);
                ObSelected = m;
                selMesh.value = m.name;
                op.innerHTML = m.name.name;
                smeshes.appendChild(op);

            }

            if (m === "Cylinder") {
                var m = Cylinder(n + a, 5, 5, 20, 64, false);
                scene.add(m);
                ObSelected = m;
                selMesh.value = m.name;
                op.innerHTML = m.name.name;
                smeshes.appendChild(op);

            }
            if (m === "Torus") {
                var m = Torus(n + a, 10, 3, 16, 100);
                op.innerHTML = m.name.name;
                smeshes.appendChild(op);
                scene.add(m);
                ObSelected = m;
                selMesh.value = m.name;

            }

        }

        function crOb(texture, geom, pos) {

            return new THREE.Mesh(geom, new THREE.MeshPhongMaterial({
                map: texture,
                transparent: true //,
            }));


        }

        function crObject(callback) {
            if (callback != undefined) {
                var c = new THREE.Mesh(geom, new THREE.MeshPhongMaterial({
                    map: texture //,
                    //  color: Math.random() * 0xffffff
                }));

                callback(c)

            }
        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            camerar.aspect = window.innerWidth / window.innerHeight;
            camerar.updateProjectionMatrix();
            cameral.aspect = window.innerWidth / window.innerHeight;
            cameral.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function WindowResize(x, y, cam, rend) {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            cam.aspect = x / y;
            cam.updateProjectionMatrix();
            rend.setSize(x, y);

        }

        function animate() {
        
            requestAnimationFrame(animate);
            if (vrmode) controlsr.update();
            else controls.update();

               if(Editor.style.display==="none"){ render();
}
        }

        function render() {
            const time = Date.now() * 0.0001;
            var os = scene.children;

            for (var i = 0; i < os.length; i++) {
                var o = os[i].name.anim;
                if (o != undefined) {
                    var oo = os[i];
                    if (o.gx != 0) oo.rotateX(o.gx)
                    if (o.gy != 0) oo.rotateY(o.gy)
                    if (o.gz != 0) oo.rotateZ(o.gz)
                }
            }
            if (blight) {
                light.position.y += 0.005;
                light.position.z += 0.0080105;
                light4.position.x = Math.sin(time * .9101013) * 100.00;
                light4.position.y = Math.cos(time * .061017) * 100.2;
                light4.position.z = -Math.sin(time * .052015) * 100.1;
            }
            if (aranim.length > 0) {
                for (var i = 2; i < aranim.length; i++) {
                    var o = aranim[i];
                }
            }

            if (!vrmode) {

                if (bcast) { //  controls2.update();

                    //   pi.innerHTML=document.activeElement.id     
                    if (params != document.activeElement) {
                        raycaster.setFromCamera(pointer, camera);

                        const intersects = raycaster.intersectObjects(scene.children, false);

                        if (intersects.length > 0) {

                            if (INTERSECTED != intersects[0].object) {


                                //	if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

                                INTERSECTED = intersects[0].object;
                                if (addTo) {
                                    if (confirm("Do you want to Add " + ObSelected.name.name + " To " + INTERSECTED.name.name)) {
                                        INTERSECTED.add(ObSelected);
                                        alert("All done");
                                        addTo = false;

                                    }
                                }
                                ObSelected = INTERSECTED;
                                params.value = JSON.stringify(INTERSECTED.name).replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/,/g, "\n");
                                //params.name=Obselected;
                                if (INTERSECTED.name.name != "World") {
                                    if (dparam.style.display === 'none') {
                                        // byp=false;
                                        dparam.style.display = 'block';
                                        params.focus()

                                    }
                                } else {
                                    //  byp=true;
                                    dparam.style.display = "none";

                                }

                            }

                        } else {

                            INTERSECTED = null;

                        }

                        //  eyes.position=camera.position;
                        //  eyes.rotation=camera.rotation;
                        eyes.position.x = camera.position.x;
                        eyes.position.y = camera.position.y;
                        eyes.position.z = camera.position.z;

        


                        //    }
                        //   else pi.innerHTML="nooooo"          

                    }
                }


                renderer.render(scene, camera);

            } else {
                eyes.position.x += eyes.name.mx * eyes.name.factor;
                eyes.position.y += eyes.name.my * eyes.name.factor;
                eyes.position.z += eyes.name.mz * eyes.name.factor;
               // eyes.rotation.x += eyes.name.rx * eyes.name.factor;
                eyes.rotation.y += eyes.name.ry;
    pi.innerHTML=comando+"<br"+JSON.stringify(eyes.name)
                // renderer.setScissorTest(true);
                renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
                renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);

                cameral.aspect = (window.innerWidth / 2) / window.innerHeight;
                cameral.updateProjectionMatrix();
                renderer.render(scene, cameral);

                // renderer.setScissorTest(true);
                renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
                renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);

                camerar.aspect = (window.innerWidth / 2) / window.innerHeight;
                camerar.updateProjectionMatrix();
                renderer.render(scene, camerar);


            }
        }

        function test(t) {
            // alert(t)
            if (t === "TextureSpecular") {
                ObSelected.name.specular = TextureSpecular.value;

                if (ObSelected.name.name === "World" && !confirm("Are you sure you want to set this background?")) return;
                else dparam.style.display = "block";
                params.value = JSON.stringify(ObSelected.name).replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/,/g, "\n");

                applay(params.value)
            }

            if (t === "TextureBump") {
                ObSelected.name.bump = TextureBump.value;


                if (ObSelected.name.name === "World" && !confirm("Are you sure you want to set this background?")) return;
                else dparam.style.display = "block";
                params.value = JSON.stringify(ObSelected.name).replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/,/g, "\n");

                applay(params.value)
            }
            if (t === "TextureURL") {
                ObSelected.name.pic = TextureURL.value;


                if (ObSelected.name.name === "World" && !confirm("Are you sure you want to set this background?")) return;
                else dparam.style.display = "block";
                params.value = JSON.stringify(ObSelected.name).replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/,/g, "\n");

                applay(params.value)
            } else {
                var file = document.getElementById(t).files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    var image = document.createElement("img");
                    image.src = e.target.result;
                    //   document.body.appendChild(image);
                    if (t === "Texture") ObSelected.name.pic = image.src;
                    if (t === "Bump") ObSelected.name.bump = image.src;
                    if (t === "Specular") ObSelected.name.specular = image.src;


                    if (ObSelected.name.name === "World" && !confirm("Are you sure you want to set this background?")) return;
                    else dparam.style.display = "block";
                    params.value = JSON.stringify(ObSelected.name).replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/,/g, "\n");

                    applay(params.value)
                }
                reader.readAsDataURL(file);
            }
        }

        function selMesh(v) {
            var ar = scene.children

            for (var i = 0; i < ar.length; i++) {
                if (ar[i].name.name === v) {
                    ObSelected = ar[i];
                    dparam.style.display = "block";
                    params.value = JSON.stringify(ObSelected.name).replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/,/g, "\n");

                    params.focus();
                    i = ar.length;
                }
            }
        }

        function editMesh() {
            if (ObSelected != null) {
                //    alert(ObSelected.parameters)
                dparam.style.display = 'block'
            }
        }

        function applay(v, from) {

            var o = v;
            //   alert(from)
            if (from != "web") {
                v = v.replace(/{\n/g, "{").replace(/\n}/g, "}").replace(/\n/g, ",")
                o = JSON.parse(v);
            }
            if (from === "web") {

                ObSelected = new THREE.Mesh(new THREE.SphereBufferGeometry(), new THREE.MeshPhongMaterial({
                    side: THREE.DoubleSide,
                    map: o.pic
                }));
                ObSelected.name = o;
                scene.add(ObSelected)

            }
            if (o.name.indexOf("Group") > -1) {
                alert("Grupo estamos trabajando");
                return
            }
            ObSelected.position.set(o.x, o.y, o.z);

            if (o.rx != undefined && o.ry != undefined && o.rz != undefined) {
                ObSelected.rotation.x = o.rx;
                ObSelected.rotation.y = o.ry;
                ObSelected.rotation.z = o.rz;
                ObSelected.name = o;
            }
            if (o.name.indexOf("Box") > -1) {
                var g = new THREE.BoxBufferGeometry(o.w, o.l, o.h);
                ObSelected.geometry = g;
            }
            if (o.name.indexOf("Sphere") > -1) {
                g = new THREE.SphereGeometry(o.r, o.sx, o.sy);
                ObSelected.geometry = g;
            }
            if (o.name.indexOf("Cylinder") > -1) {
                var g = new THREE.CylinderGeometry(o.r1, o.r2, o.h, o.s);
                ObSelected.geometry = g;

            }
            if (o.name.indexOf("Torus") > -1) {

                var g = geometry = new THREE.TorusGeometry(o.r, o.tk, o.rs, o.ts)
                ObSelected.geometry = g;

            }
            ObSelected.material.map = THREE.ImageUtils.loadTexture(o.pic);
            /////////////////////////
            if (o.bump != undefined) {
                ObSelected.material.bumpMap = THREE.ImageUtils.loadTexture(o.bump);
                ObSelected.material.bumpScale = .13;

            }
            if (o.specular != undefined) {
                ObSelected.material.specularMap = THREE.ImageUtils.loadTexture(o.specular);
                ObSelected.material.specular = new THREE.Color('grey');

            }
            if (o.anim.pvx != undefined && o.anim.pvy != undefined && o.anim.pvz != undefined) {
                ObSelected.geometry.translate(o.anim.pvx, o.anim.pvy, o.anim.pvz)
                render()
            }

            ObSelected.material.map.wrapS = ObSelected.material.map.wrapT = THREE.RepeatWrapping;

            ObSelected.material.map.repeat.set(o.rpx, o.rpy);
            ObSelected.material.map.offset.x = o.ofx; //,o.ofy)
            ObSelected.material.map.offset.y = o.ofy;
            ObSelected.material.map.rotation = o.rot;
            ObSelected.material.needsUpdate = true;
            if (ObSelected.material.color === undefined) ObSelected.material.color = '#ffffff';
            if (o.transparent != undefined) ObSelected.material.transparent = o.transparent;
            if (o.opacity != undefined) ObSelected.material.opacity = o.opacity;
            params.name = o;


            render();

        }

        function delM() {
            //
            if (confirm("Are you sure you want to Delete " + ObSelected.name.name)) {
                var a = scene.children;
                for (var i = 0; i < a.length; i++) {
                    if (ObSelected.name.name === a[i].name.name) {
                        scene.remove(a[i])
                    }

                }

                render();
            }
        }

        function removeObject3D(object3D,callback) {
            object3D = ObSelected
            if (!(object3D instanceof THREE.Object3D)) return false;

            // for better memory management and performance
            if (object3D.geometry) object3D.geometry.dispose();

            if (object3D.material) {
                if (object3D.material instanceof Array) {
                    // for better memory management and performance
                    object3D.material.forEach(material => material.dispose());
                } else {
                    // for better memory management and performance
                    object3D.material.dispose();
                }
            }
      //      object3D.removeFromParent(); // the parent might be the scene or another Object3D, but it is sure to be removed this way
            if(callback!=undefined) callback();
          //  return true;
        }


        function setWorld(v) {

            dparam.style.display = "block"

        }

        function SetVr() {
            bsp=vrmode;
            if (vrmode) {
               // if (!bsp) {runSpeechRecognition();bcom.style.background = "green";bsp = true;} else {bcom.style.background = "blue";bsp = false;}
                renderer.setScissorTest(false);
                vrmode = false;
                onWindowResize();;
                controlsr.connect();
                eyes.position.x = camera.position.x;
                eyes.position.y = camera.position.y;
                eyes.position.z = camera.position.z;
                //    eyes.rotation.x = Math.PI;
                eyes.rotation = camera.rotation;
                render();
                closeFullscreen(renderer.domElement);
               // inicSpeech()
           //    runSpeechRecognition();
          //   bsp=false;
            } else {
                renderer.setScissorTest(true);
                eyes.position = camera.position;
                vrmode = true;
                controls.enabled = true;
                controlsr.desconnect;
                render();
                openFullscreen(renderer.domElement);
             //   bps = true;
               // inicSpeech()
            //   runSpeechRecognition()
            }
        }

        function openFullscreen(elem) {

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
            onWindowResize();
            render();
        }

        function closeFullscreen(elem) {

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            onWindowResize();
            render();
        }


        function inicSpeech() {

            if (!bsp) {bcom.style.background = "green";bsp = true;} else {bcom.style.background = "blue";bsp = false;}
        }

        function exComando(cc) {
            pi.innerHTML=cc
            comando=cc;
            var p=1;
            c = cc;

            if (c.indexOf("salir") > -1) {
                bsp = false;

                recognition.stop();
                SetVr();
            }
            if (c.indexOf("luz") > -1) {
                if (blight) blight = false;
                else blight = true
            }
            if (c.indexOf("rriba") > -1) {
                eyes.name.my = p

            }
            if (c.indexOf("bajo") > -1) {
                eyes.name.my = -p
            }
            if (c.indexOf("quierda") > -1) {
                eyes.name.mx = -p
            }
            if (c.indexOf("derecha") > -1) {
                eyes.name.mx = p
            }
            if (c.indexOf("girar hizquierda") > -1) {
                eyes.name.ry = -p
            }
            if (c.indexOf("girar derecha") > -1) {
                eyes.name.ry = p
            }
            if (c.indexOf("girar arriba") > -1) {
                eyes.name.rx = -p
            }
            if (c.indexOf("girar abajo") > -1) {
                eyes.name.rx = p
            }
            if (c.indexOf("para") > -1) {
                eyes.name.my = 0;
                eyes.name.mx = 0;
                eyes.name.mx = 0;
                eyes.name.rx = 0;
                eyes.name.ry = 0;
                eyes.name.rz = 0;
                me.name.factor = .001;
            }
            if (c.indexOf("origen") > -1) {
                eyes.name.my = 0;
                eyes.name.mx = 0;
                eyes.name.mx = 0;
                eyes.name.rx = 0;
                eyes.name.ry = 0;
                eyes.name.rz = 0;
                me.name.factor = .001;
                eyes.position = eyes.name.pos;
            }
            if (c.indexOf("lento") > -1) {
              //  eyes.name.factor -= eyes.name.factor / 5;
                eyes.name.factor -= eyes.name.factor /2;
                
            }
            if (c.indexOf("rapido") > -1) {
                eyes.name.factor += eyes.name.factor *2;
            }
            pi.innerHTML=JSON.stringify(eyes.name)
        }

        function saveScene() {
            var obs = scene.children;
            var n = prompt("Type scene name...", sproyestos.value);
            if (n === null || n === "" || n === undefined) {
                alert("Wrong Name, try again");
                return
            }

            var os = {
                name: n
            };
            var ar = [];
            for (var i = 0; i < obs.length; i++) {
                if (obs[i].name != undefined) {
                    if (obs[i].name.name != undefined) {

                        // alert(JSON.stringify(obs[i].name))
                        if (obs[i].name.pic != undefined) {
                            if (obs[i].name.pic.length < 500) obs[i].name.pic = "";
                        }
                        ar.push(obs[i].name);
                    }
                }
            }
            os.objects = ar;

            GetJ("https://jsonblob.com/api/959920656255041536", function(ob) {
                //    alert(JSON.stringify(ob))
                var c = false;
                for (var i = 0; i < ob.esenas.length; i++) {
                    if (ob.esenas[i].name === os.name) {
                        if (confirm("Already exist, do you want to update it?")) ob.esenas[i] = os;
                        else return;
                        i = ob.esenas.length;
                        c = true;
                    }
                }

                if (!c) ob.esenas.push(os);


                UpdateJ("https://jsonblob.com/api/959920656255041536", ob, function(ob) {

                    alert("Done...")
                })
            })
        }

        function GetJ(url, callback) {

            //var url  = "http://localhost:8080/api/v1/users";
            var xhr = new XMLHttpRequest()
            xhr.open('GET', url + '/1', true)
            xhr.onload = function() {
                //         (xhr.responseText)
                var users = JSON.parse(xhr.responseText);
                //     var obb=decoding(users.prim);

                if (xhr.readyState == 4 && xhr.status == "200") {
                    callback(users);
                } else {
                    console.error(users);
                }
            }
            xhr.send(null);
        }

         // Update a user
        function UpdateJ(url, ob, callback) {

            json = JSON.stringify(ob);
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url + '/12', true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onload = function() {
                var users = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    //  alert("Tu Forma ha sido Enviada");
                    if (callback != undefined) callback(users);
                } else {
                    (users);
                }
            }
            xhr.send(json);
        }

        function selProy(v) {
            //   
            for (var i = 0; i < Esenas.length; i++) {
                if (v === Esenas[i].name) {
                    oo = Esenas[i].objects;
                    for (ii = 0; ii < oo.length; ii++) {

                        if (oo[ii].name != "World") applay(oo[ii], "web")

                    }

                    //   

                }
            }

        }

        function ExtractAudio(el) {

            var file = el.files[0]
            var type = file.type
            var videoNode = document.querySelector('Video')
            var canPlay = videoNode.canPlayType(type)
            if (canPlay === '') canPlay = 'no'
            // var message = 'Can play type "' + type + '": ' + canPlay
            // var isError = canPlay === 'no'
            //  displayMessage(message, isError)

            //  if (isError) {
            //   return
            //  }

            var fileURL = URL.createObjectURL(file)
            videoNode.src = fileURL
        }


        function ExtractAudio2(el) {
            var file = el.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                Video.src = e.target.result;
                getPaht(file)
            }
            reader.readAsDataURL(file);

        }

        function InicRecording(canvas) {
            Video.play();

            cStream = canvas.captureStream(30);
            cStream.addTrack(aStream.getAudioTracks()[0]);
            var mixedStream = 'MediaStream' in window ? new MediaStream([cStream.getVideoTracks()[0], aStream.getAudioTracks()[0]]) : cStream;
            recorder = new MediaRecorder(mixedStream);
            recorder.start();
            recorder.ondataavailable = function(e) {
                chunks.push(e.data);
            };
            recorder.onstop = exportStream;

        };

        function setupAudio() {

            //AudioContext = window.AudioContext || window.webkitAudioContext;
            var ac = new AudioContext();
            dest = ac.createMediaStreamDestination();
            aStream = dest.stream;
            var sourceNode = ac.createMediaElementSource(Video);
            sourceNode.connect(dest);

            // output to our headphones
            sourceNode.connect(ac.destination)

        };

        function StopRecording() {

            Video.pause();
            recorder.stop()
            exportStream();
        }

        function exportStream(e) {

            if (chunks.length) {

                var blob = new Blob(chunks, {
                    'type': 'video/mp4'
                })
                var vidURL = URL.createObjectURL(blob);
                //chunks=[];
                for (i = 0; i < chunks.length; i++) {
                    chunks.pop();
                }

                Video.controls = true;
                //Video.width=600;
                Video.src = vidURL;
                Video.onend = function() {
                    URL.revokeObjectURL(vidURL);
                }


            }
        }

        function screenShot() {
            //  render();
            //   var cata=renderer.domElement.toDataURL("png");
            // window.open(cata, '_blank');


            // this.canvas.toBlob( function( blob ) {
            render();
            renderer.domElement.toBlob(function(blob) {

                var url = URL.createObjectURL(blob);
                //var fileName = 'ScreenShot-' + document.title + '-' + Date.now() + 'jpeg';//png';
                var fileName = 'ScreenShot-' + document.title + '-' + Date.now(); //png';
                var anchor = document.createElement('a');
                anchor.href = url;
                anchor.setAttribute("download", fileName);
                anchor.className = "download-js-link";
                anchor.innerHTML = "downloading...";
                anchor.style.display = "none";
                document.body.appendChild(anchor);
                setTimeout(function() {
                    anchor.click();
                    document.body.removeChild(anchor);
                }, 1);

            }, 'image/jpeg');





        }

        function add(o) {
            alert('Choose an Object');
            fromob = o;


        }

        function getP() {
            //   var loc = window.location.pathname;
            //var dir = loc.substring(0, loc.lastIndexOf('/'));
            //pi.innerHTML=dir;
            //alert(dir)
        }
        /*       let p = document.createElement('textarea');
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'es-MX | en-US';
        recognition.continuous = true;

        recognition.onresult = function(event) {
            comando = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                comando += event.results[i][0].transcript;
            }
            if (event.results.length > 0) {
                if (comando != "") {
                    p.value = comando + "\n";
                    nota = comando;
                    exComando(comando)

                }
            }

        } //recognition.addEventListener('end', recognition.start);
        recognition.addEventListener('end', function() {
            //  alert(nota);
            p.value += nota + "\n\n";
            if (bps) recognition.start();
            if (vrmode) recognition.start();

        });

        words.appendChild(p);*/
        function runSpeechRecognition() {

    clearTimeout(spe);
                try {
                // new speech recognition object
             //   var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
                recognition.interimResults = true;
        recognition.lang = 'es-MX | en-US';
        recognition.continuous = true;

                // This runs when the speech recognition service starts
                recognition.onstart = function() {
                    pi.innerHTML = "<small>listening, please speak...</small>";
                };

                recognition.onspeechend = function() {
                    pi.innerHTML = "<small>stopped listening, hope you are done...</small>";
                    if(bsp) spe=setTimeout(runSpeechRecognition,500);
                    else recognition.stop();
 
                }

                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                  //  var confidence = event.results[0][0].confidence;
               //     pi.innerHTML = "<b>Text:</b> " + transcript;// + "<br/> <b>Confidence:</b> " + confidence * 100 + "%";
                    exComando(transcript)
               //   if(bsp) spe=setTimeout(runSpeechRecognition,1500);
                };

                // start recognition
            
                recognition.start();

            } catch (e) {
                pi.innerHTML = e
            }


        }
    function applayMainEditor(){
      
    //    if(confirm("You have "+esena.children.length+" Objects, do you want to replace it?")){  
            ;
            while (esena.children.length > 0) {
                removeObject3D(esena.children[esena.children.length-1],function(){;});
                esena.remove(esena.children[esena.children.length-1])
           
            }
        var c=mainEditor.value;
        try{

            eval(c)
        }
        catch(e){alert(e)}
  //  }
  //  else ;

    }
    function insert(v){
        var t=mainEditor.value;
        var i=mainEditor.selectionStart;
        var p1=t.slice(0,i);p2=t.slice(mainEditor.selectionEnd,mainEditor.value.length)
        var e=p1 +v+ p2;
        mainEditor.value=e;
        mainEditor.focus();
        mainEditor.selectionEnd=i+v.length;

    }
    function addtxt(o){
           var ge="";
        var ge="new THREE.Mesh()";
        if(o==="Material") ge="new THREE.MeshPhongMaterial()";
        if(o==="gBox") ge="new THREE.CubeGeometry(20, 20, 20, 3, 3, 3)";
        if(o==="gSphere") ge="new Three.SphereGeometry(20, 8, 6)";
        if(o==="gTorus") ge="new THREE.TorusGeometry(10, 3, 16, 100)";
        if(o==="gPlane") ge="new THREE.PlaneGeometry(20, 20)";
        if(o==="gCylinder") ge="new THREE.CylinderGeometry(15, 15, 30, 9, 2, true)";
        if(o==="gRing") ge="new THREE.RingGeometry(20,20, 9, 10)";
        if(o==="Mesh") ge="new THREE.Mesh()";
        if(o==="Texture Util") ge="new THREE.ImageUtils.loadTexture( 'src' )";
        if(o==="Texture  Loader") ge="new THREE.TextureLoader().load(' src ',function(t){ }";
        if(o==="Add to esena") ge="esena.add( )";
        insert(ge)
      }

    function addtrycatch(){
        var t="try{\n"+mainEditor.value+"\n}\ncatch(error){\n\nalert(error)\n\n}";
        
        mainEditor.value=t;

    }
    function saveEd(opc){
        var n=prompt("Type proyect name",proyecto);
        if(n===null){alert("Proyect was not saved, name required");return;}
        if(opc==="local"){
       
        var a=localStorage.getItem("editors");
        if(a!=null){
            var ob=JSON.parse(a);
          
            for(var i=0;i<ob.proyectos.length;i++){
                if(ob.proyectos[i].indexOf("/*\n\n"+n)>-1){
                   if(confirm("Project "+n+" Exist, do you want to replace it?")){
                    ob.proyectos[i]=mainEditor.value;
                     localStorage.setItem("editors",JSON.stringify(ob));
                     return;
                   }
                   else return;
                   }
            }
            localStorage.setItem("editors",JSON.stringify(ob))
        }
        else{
            ob={};
            ob.proyectos=[];
            ob.proyectos.push("/*\n\n"+n+"\n\n*/\n"+mainEditor.value);
            localStorage.setItem("editors",JSON.stringify(ob))
        }
    }
    else{
 
     
        GetJ(liproj,function(ob){
            var e=false;
            for(var i=0;i<ob.proyectos.length;i++){
                if(ob.proyectos[i].indexOf("/*\n\n"+n)>-1){
                   if(confirm("Project "+n+" Exist, do you want to replace it?")){
                    ob.proyectos[i]=mainEditor.value;
                    UpdateJ(liproj,ob,function(){alert("Replace it in web")})
                    e=true;
                    i=ob.proyectos.length;
                    // 
                   }
                   else return;
                 
                   }
            }
            if(!e){
        ob.proyectos.push("/*\n\n"+n+"\n\n*/\n"+mainEditor.value);
        UpdateJ(liproj,ob,function(){alert("Saved in web")})
}

        })
     }
    }
    function openProy(n){
        var a=localStorage.getItem("editors");
        if(a!=null){
           
            ob=JSON.parse(a);
            for(var i=0;i<ob.proyectos.length;i++){
                if(ob.proyectos[i].indexOf("/*\n\n"+n)>-1){
                    mainEditor.value=ob.proyectos[i]; proyecto=n;
                    bdelpl.innerHTML="Del "+proyecto
                    return;
                }
            
            }
        }

    }
    function openProyw(n){
       
        GetJ(liproj,function(ob){
           for(var i=0;i<ob.proyectos.length;i++){
                if(ob.proyectos[i].indexOf("/*\n\n"+n)>-1){
                    mainEditor.value=ob.proyectos[i]; proyecto=n;
                    bdelp.innerHTML="Del "+proyecto
                    return;
                }
            
            }
        })
     }   
     function delproy(){
         if(proyecto!=""){
             
            GetJ(liproj,function(ob){
            for(var i=0;i<ob.proyectos.length;i++){
            var p=ob.proyectos[i];
            p=p.split("\n\n")[1];
            if(p===proyecto){
                
                    if(confirm("Are you sure to delete "+proyecto+" ?")){
                        ob.proyectos.splice(i,1);
                        UpdateJ(liproj,ob,function(){alert("project Deleted");
                    setupProyw();
                })

                    } 
                    else return;
                }
       
            }
        
        
         })
         }
     }
     function delproyl(){
         if(proyecto!=""){
             
            var a=localStorage.getItem("editors");
        if(a!=null){
            sproy.innerHTML="";
            var s="";
            ob=JSON.parse(a);
            for(var i=0;i<ob.proyectos.length;i++){
            var p=ob.proyectos[i].proyectos[i];
            p=p.split("\n\n")[1];
                if(p===proyecto){
                    ob.splice(i,1);
                    if(confirm("Are you sure to delete "+proyectos+" ?")) localStorage.setItem("editors",JSON.stringify(ob))
                    return;
                }
              }
       }
         }
     } 
    function setupProy(){
        sproy.innerHTML="";
        var a=localStorage.getItem("editors");
        if(a!=null){
            sproy.innerHTML="";
            var s="";
            ob=JSON.parse(a);
            for(var i=0;i<ob.proyectos.length;i++){
            var p=ob.proyectos[i];
            p=p.split("\n\n")[1];

            s+="<option>"+p+"</option>"
            }
            sproy.innerHTML=s;
   
    }
    }
     function setupProyw(){
         GetJ(liproj,function(ob){
            sproyw.innerHTML="";   
            for(var i=0;i<ob.proyectos.length;i++){
            var p=ob.proyectos[i];
            p=p.split("\n\n")[1];

            s+="<option>"+p+"</option>"
            }
            sproyw.innerHTML=s;
        
         })
 
    }
    </script>

</body>

</html>
