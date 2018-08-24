<html>

<head>
    <meta name="viewport" content="width=device-width">
    <script src='file:///android_asset/app.js'></script>
</head>

<body onload="">
    <style>
        body {
            overflow: hidden;
            margin: 0;
            background: white;
        }
        #container {
            transform-style: preserve-3d;
            position: absolute;
            top: 0%;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        #canvas1 {
            position: absolute;
            box-shadow: -10px 10px 20px rgba(0, 0, 80, .4);
            border-radius: 8px;
            border-style: solid;
            background: black;
        }
        .cscreen {
            // position: absolute;
            background: rgba(100, 100, 100, .2);
            border-radius: 5px;
            border-style: solid;
            width: 50px;
            height: 50px;
            color: white;
            top: 4%;
            // margin: 0px 5% 0px 5%;
            margin: auto;
            font-weight: bold;
            -webkit-text-stroke: .3px black;
        }
        #dmenu {
            text-align: center;
            position: absolute;
            z-index: 1px;
            top: 48%;
            width: 100%;
            height: 50px;
            overflow-y: hidden;
            display: flex;
        }
        #fullsc {
            // left: 3%
        }
        #vir {
            // right: 3%
        }
        #tkpic {
            background: url(Img/camera-icon.png);
            background-size: 100% 100%;
            // opacity: .5;
        }
        #edi {
            position: absolute;
            font-size: 14px;
            // font-weight: bold;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            padding: 15px;
            border-radius: 5px;
            background: url(Img/chalkboard.jpg);
            background-size: 100% 100%;
            color: white;
            font-weight: bold;
        }
        #deditor {
            // overflow-x: hidden;
            width: 100%;
            height: 55%;
            position: absolute;
            top: 0%;
            z-index: 3px;
            display: none;
            border-style: solid;
            border-width: .5px;
            border-radius: 5px;
            border-color: blue;
            box-shadow: -10px 10px 20px rgba(0, 0, 80, .4);
        }
        #menu2 {
            // text-align: center;
            width: 100%;
            height: 20%;
            position: absolute;
            top: 60%;
            font: size: 25px;
            font-weight: bold;
            z-index: 2px;
            display: block;
        }
        .cmenu2 {
            position: absolute;
            height: 100%;
            width: 40%;
            border-radius: 10px;
            // background: #cf4327;
            background: white;
            font-size: 25px;
            font-weight: bold;
            color: black;
            // box-shadow: inset 10px -10px 40px #aa5307, inset -10px 10px 40px #FF6347;
            box-shadow: -10px 10px 20px rgba(0, 0, 80, .4);
        }
        #oedi {
            left: 2%;
        }
        #oproc {
            right: 2%;
        }
        #ovr {
            // background: #43cf27;
            background: url(Img/vr.jpg);
            background-size: 100% 100%;
            height: 100px;
            width: 100px;
            top: 10%;
            border-style: solid;
            border-color: #00ff00;
            border: width: 18px;
            // box-shadow: inset 5px -5px 30px #330780, inset -5px 5px 30px #4347aa;
            box-shadow: none;
            left: 35%;
            border-radius: 50%;
            z-index: 4px;
            transition: top 1s;
            color: white;
            font-size: 50px;
            font-weight: 10px;
            overflow: auto;
            -webkit-text-stroke: 1px black;
        }
        .coedi {
            position: relative;
            width: 40%;
            height: 80%;
        }
        #selobjetos {
            position: absolute;
            // background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfu5qet5QA1jsv-Vov2drdmItmhheYCfTzWcMirD5PYbA-zmD61w);
            background: rgba(0, 0, 80, .051);
            background-size: 100% 100%;
            left: 120%;
            top: 10%;
            width: 60%;
            height: 80%;
            overflow: auto;
            // display: none;
            border-color: orange;
            border-style: solid;
            border-radius: 10px;
            box-shadow: inset 0px 0px 160px orange;
            // border-width: .5px;
            // transition: left .5s;
            text-align: center;
        }
        .csel {
            width: 80%;
            height: 15%;
            overflow: hidden;
            position: relative;
            font-size: 12px;
            font-weight: bold;
            margin: 5px;
            // background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfu5qet5QA1jsv-Vov2drdmItmhheYCfTzWcMirD5PYbA-zmD61w);
            background-size: 100% 100%;
            border-radius: 5px;
            border-style: solid;
            border-width: .5px;
            color: white;
            background: #000088;
            box-shadow: inset 10px -10px 50px #000040, inset -10px 10px 50px #aaaaee;
        }
        .cedb {
            position: absolute;
            // background: rgba(80, 20, 80, .3);
            border-radius: 10px;
            border-style: solid;
            border-color: black;
            width: 50px;
            height: 50px;
            color: black;
            right: 1%;
            box-shadow: inset 0px 0px 20px green;
            background-color: rgba(0, 200, 0, .4);
        }
        #fulleditor {
            // right: 0px;
            top: 1%;
            right: 1%;
            border-radius: 100%;
            width: 30px;
            font-weight: bold;
            overflow: hidden;
            height: 30px;
            color: #fff;
            background: rgba(255, 255, 255, .21);
            box-shadow: none;
            border-style: solid;
            border-color: white;
        }
        #chcolor {
            width: 95%;
            background: rgba(0, 255, 0, .5);
            border-radius: 5px;
        }
        #gtx {
            height: 80%;
        }
        #ifra {
            border-radius: 10px;
            box-shadow: -10px 10px 30px #333388;
            position: absolute;
            top: 10%;
            left: 20%;
            width: 60%;
            height: 40%;
            overflow: auto;
            background: rgba(40, 150, 50, .35);
            background-size: 100% 100%;
            transform: translateZ(42px);
        }
        #iabout {
            background: white;
            width: 90%;
            height: 80%;
            position: absolute;
            z-index: 10px;
            // display: none;
            top: 5%;
            left: 5%;
            border-style: solid;
            border-radius: 10px;
            box-shadow: 10px 10px 50px black;
        }
        #clred {
            height: 80%;
        }
        #bhelp {
            height: 80%;
        }
        #gcol {
            height: 80%;
        }
        #settx {
            height: 80%;
        }
        #ifdlg {
            position.absolute;
            top: 70%;
            left: 30%;
            width: 80%;
            height: 40%;
            border-radius: 10px;
            border-style: solid;
            box-shadow: 15px 15px 50px black;
            z-index: 15;
        }
        #slight {
            top: 1%;
            right: 1%;
            border-radius: 100%;
            width: 35px;
            font-weight: bold;
            overflow: hidden;
            height: 35px;
            color: #fff;
            // background: rgba(255, 255, 255, .21);
            background: url(Img/lighticon.png);
            background-size: 100% 100%;
            background-color: rgba(255, 255, 255, .21);
            box-shadow: none;
            border-style: solid;
            border-color: white;
            position: absolute;
            z-index: 50px;
            display: none;
            opacity: 1;
        }
        #logo {
            width: 100%;
            height: 30px;
            text-align: center;
            position: absolute;
            bottom: 10%;
            font-family: cursive;
            transform: scale(2.5, 1);
            font-weight: bold font-size: 20px;
            color: blue;
            opacity: .20;
        }
    </style>
   <audio id="snd" style="display:none"><source src="Misc/camera_click.wav" type="audio/wav"></audio>
  
    <div id="container">
        <div id="logo">L Jauregui L Apps.</div>


        <div id="objeto">
            <canvas id="canvas1"></canvas>

        </div>

        <div id='dmenu'>
            <button id="fullsc" class="cscreen" onclick="fullscreen()">Full
                <br>Screen</button>
            <button id="tkpic" class="cscreen" onclick="takepic()"></button>

            <button id="Vir" class="cscreen" onclick="openmenu()">Menu</button>
            <button id="Vir" class="cscreen" onclick="speech_OnResult(['magic'])">Vr</button>

        </div>
        <div id="deditor">

            <textarea id="edi" placeholder="Write your codes here, use ' ? ' button for quick coding like shorcuts, functions and so on.....">
            </textarea>



            <div id="selobjetos">



                <div id="chcolor" style="display:flex" class="csel">
                    <button id="bhelp" class="csel" onclick="openhelp()">How To</button>
                    <button id="clred" class="csel" onclick="cleareditor()">Clear Editor</button>
                </div>
                <button id="shorts" class="csel" onclick="addlist('shortcuts')">Shortcuts</button>

                <button id="objs" class="csel" onclick="addlist('objs')">Objects</button>


                <div id="chcolor" style="display:flex" class="csel">
                    <button id="gtx" class="csel" onclick="add('Texture')">Get Texture</button>


                    <button id="settx" class="csel" onclick="add(document.getElementById('gcol').value)">Set Color</button>
                    <input type="color" id="gcol" style="width:50%;height:100%;"></input>
                </div>

                <button id="struc" class="csel" onclick="addlist('structural')">Structural Object</button>


                <button id="maths" class="csel" onclick="addlist('maths')">Math Operations</button>




                <button id="examps" class="csel" onclick="addlist('examples')">Examples</button>


            </div>

            <button id="fulleditor" class="cedb" onclick="openhand()">?</button>

        </div>
        <div id="menu2">
            <button id="oedi" class="cmenu2" onclick="openedit()" class="coedi">Open Editor</button>

            <button id="oproc" class="cmenu2" onclick="process()" class="coedi">Process Codes</button>
            <button id="ovr" class="cmenu2" onclick="speech_OnResult(['magic'])" class="coedi">3D</button>

        </div>
        <iframe id="iabout" src="pageinic.html"></iframe>
        <button id="slight" class="cedb" onclick="setlight()"></button>
        <script src="Misc/three.js"></script>
        <script src="Misc/DeviceOrientationControls.js"></script>
        <script src="Misc/TrackballControls.js"></script>
        <script src="cursorpos.js"></script>
        <script src="Misc/ThreeCSG.js"></script>
        <script src="axis.js"></script>


        <script src="MyLib.js"></script>

        <script src="SaveFile.js"></script>

        <script>
   
               eclick=document.getElementById("snd");
            //       var bnotif=false,nota="";
            var n = app.LoadText("cad nota")
             //        alert(n.length);
             var nn = n.slice(0, n.length - 4) //chacar esto, hay 4 caracteres extras
             //        alert(nn);
             //        alert(nn.length);
             app.SaveText("cad nota", nn); //chacar esto hay 4 caracteres extras

            eabout = document.getElementById('iabout')
             //       eabout.src="pageinic.html";
             //        eabout.style.display="block";

             //PAGE IN FIDDLE
             //https://jsfiddle.net/jauregui/dwkg01sa/21/

             // wix webs
             //https://lrjauregui4.wixsite.com/cad360vrsite
             // chek this to exec in iframe
             //document.getElementById("resultFrame").contentWindow.Reset();
             //window.frames['resultFrame'].Reset();
             //https://www.fixpicture.org/

             app.SetOrientation("Portrait");

            actualwindow = "main", bls = true, els = document.getElementById("slight");

            app.EnableBackKey(false);
            s_cale = 1;
            idbk = "";
            var e_je = axis(400);
            e_je.name = "axis";
            var baxis = true;
            var actualproject = "New Project";
            var objhelp = app.ReadFile("Misc/objhelp.txt"); //alert(objhelp);
            var shortcuthelp = app.ReadFile("Misc/shorcutshelp.txt", "UTF-8"); //alert(shortcuthelp);
            var shortcutlist = "?,var ,scene.add( _ ),material('MyTexture.png' & 0xffffff),animateObj( ... ),geometry(),.clone(),.merge( _ ),.add( _ ),adjusttexture(mat_&1&1&0&0&0),.position.set(0 & 0 & 0),.position.x=,.position.y=,.position.z=,.rotateX( 0 ),.rotateY( 0 ),.rotateZ( 0 ),.translate(0 & 0 & 0),.renderOrder=1,.geometry,.material,.opacity=1";
            var stlist = "?,structural.plate(48&96&.25&'MyTexture.png'&0xaaaaaa&false),structural.angle(3&3&48&.25&'MyTexture.png'&0xaaaaaa&false)," +
                "structural.plateedged(12&25&.5&1&'MyTexture.png'&0xaaaaaa&false&20)," +
                "structural.tube(10&48&.5&'MyTexture.png'&0xaaaaaa&false&20),structural.pipe(10&48&.5&'MyTexture.png'&0xaaaaaa&false&20)," +
                "structural.channel(6&48&2&.25&'MyTexture.png'&0xaaaaaa&false),structural.hbeam(4&48&10&3/8&'MyTexture.png'&0xaaaaaa&false)," +
                "structural.bar(1&48&'MyTexture.png'&0xaaaaaa&false&20),structural.squaretubingedged(45&3&6&.25&.75&'MyTexture.png'&0xaaaaaa&false&20),structural.squaretubing(3&6&48&.25&'MyTexture.png'&0xaaaaaa&false)";

            var stlistn = "?,plate,angle,plateedged,tube,pipe,channel,hbeam,bar,squaretubingedged,squaretubing"
            var quickstructural = app.ReadFile("Misc/structuraltips.txt") //;alert(quickstructural);//structuraltips.txt

             var geolist = "gbox(50&50&50&false),gsphere(50&30&30&true),gcylinder(25&25&80&30&30&false),gplane(50&50&false),geometry(),gsubtract(fromob_&ob_),gunion(ob1_&ob2_),gintersection(ob1_&ob2_)";
             //var operationlist = "subtract({fromob:ob1_&ob:ob2_}),union({fromob:ob1_&ob:ob2_}),intersection({fromob:ob1_&ob:ob2_})"
            var meshlist = '?,mesh(g_&mat_),group(),box(50&50&50&""&0xaaaaaa&false),sphere(50&30&30&""&0xaaaaaa&false),cylinder(25&25&80&30&30&""&0xaaaaaa&false),' +
                'plane(50&50&""&0xaaaaaa&false)';
            var meshn = "?,mesh,group,box,sphere,cylinder,plane";
            var geon = "gbox,gsphere,gcylinder,gplane,geometry,gsubtract,gunion,gintersetion";


            var examplelist = app.ListFolder("Misc/examples");
            var mathlist = "?,Math.sqrt( _ ),Math.pow( _ & _ ),Math.PI,Math.round( _ ),Math.random(),Math.sin( _ ),Math.cos( _ ),Math.tan( _ ),Math.asin( _ ),Math.acos( _ ),Math.atan( _ ),"


            objlist = meshn + "," + geon;
            objf = meshlist + "," + geolist;

            /*         
             //   bobjanimate=false;
            ob_animate = {
                obj: new THREE.Mesh(animation = false, new THREE.Geometry(), new THREE.MeshPhongMaterial()),
                giro: false,
                giroX: .01,
                giroY: .01,
                giroZ: .01
            }
     */
            function ob_animate() {
                this.posx = 0;
                this.posy = 0;
                this.posz = 0;
                this.giro = false;
                this.giroX = 0;
                this.giroY = 0;
                this.giroZ = 0;
                this.giroRX = 00;
                this.giroRY = 00;
                this.giroRZ = 0;
                this.spinX = 0;
                this.spinY = 0;
                this.spinZ = 0;
                this.obj = new THREE.Mesh(new THREE.Geometry(), new THREE.MeshPhongMaterial())
                this.animate = false;
            }
            var arani = []
            var blight = true;
            var scene = new THREE.Group()
             var brender = true,
                bobjetos = true;


            eobjetos = document.getElementById('selobjetos');
            eedi = document.getElementById('edi');
            ededi = document.getElementById('deditor');
            emenu2 = document.getElementById('menu2');
            eovr = document.getElementById('ovr');
            eedi.value = '';
            width_ = window.innerWidth;
            height_ = window.innerHeight;
             //   eiwidth=document.getElementById("iwidth");
            b3 = false, bdev = false, btrk = false, baxe = false, borb = false, bbra = false, blib = false, bcsg = false, bmir = false, bac = false, bsa = false;
            var bfullscreen = false;
            emenu = document.getElementById('dmenu');
            epar = document.getElementById('dparametros');
            efullsc = document.getElementById('fullsc');
             //    emenu=document.getElementById('');
            fold = "/sdcard/Cad 360Vr/Pictures Cad 360Vr/";

            if (!app.FolderExists("/sdcard/Cad 360Vr/Obj Files/")) app.MakeFolder("/sdcard/Cad 360Vr/Obj Files/");
            if (!app.FolderExists(fold)) app.MakeFolder(fold)
             piclist = app.ListFolder(fold);
            var foldproj = "/sdcard/Cad 360Vr/Projects/"

            if (!app.FolderExists("/sdcard/Cad 360Vr/Projects/")) app.MakeFolder("/sdcard/Cad 360Vr/Projects/")
             projectlist = app.ListFolder("/sdcard/Cad 360Vr/Projects/");
            cyli = undefined;
            velocity = {
                x: .3,
                y: .3,
                z: .3
            }
            speed = .3;
            rv_ = 1
             mv = {
                x: 0,
                y: 0,
                z: 0
            };
            eyes = new THREE.Group();
            var vr = false,
                move = "stop";

            var camera, s_cene, renderer;
            ecanv1 = document.getElementById("canvas1");
            ecanv1.width = window.innerWidth;
            ecanv1.height = window.innerWidth * 1.4;
            b3 = false, bdev = false, btrk = false, baxe = false, borb = false, bbra = false, blib = false, bcsg = false, bmir = false, bac = false, bsa = false;
             // prepare();
            function inicapp() {


                prepare();
            }

            function prepare() {

                ////

                chk = setInterval(function() {

                    try {
                        blib = libloaded()
                    } catch (er) {}
                    //   try{alert("cargado "+brkloaded());btrk=trkloaded()}
                    //  catch(er){alert(er);}  
                    //   try {
                    //       bac = acloaded()
                    //   } catch (er) {app.ShowPopup(er);}
                    try {
                        bsa = saloaded()
                    } catch (er) {}
                    //                   if (bbra && blib && bsa) {
                    if (blib && bsa) {

                        // app.SetScreenMode("Full");
                        app.SetOrientation("Portrait");
                        speech = app.CreateSpeechRec("NoBeep,Parxtial");
                        speech.SetOnResult(speech_OnResult);
                        speech.SetOnError(speech_OnError);




                        clearInterval(chk);
                        setTimeout(function() {
                            init()
                        }, 500);
                        /* */

                    }
                }, 2);
            }

            function init() {
                todo = new THREE.Group();
                ecanv1.width = window.innerWidth;
                ecanv1.height = window.innerWidth;
                els.style.display = "block";
                eyes = new THREE.Group();
                cara = mesh(gplane(50, 70, true, false), material('Img/cara2.png'));
                cara.material.transparent = true;
                cara.material.side = THREE.DoubleSide;
                cara.position.z = 1;
                eyes.add(cara);
                cameral = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 5000);
                cameral.position.x = -5;
                camerar = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 5000);
                camerar.position.x = 5;
                eyes.add(cameral); //cameral.rotation.y=-.05;
                eyes.add(camerar); //cameral.rotation.y=.05;
                eyes.position.y = 000;
                eyes.position.z = 200;

                s_cene = new THREE.Scene();
                s_cene.add(todo);
                scene.scale.set(s_cale, s_cale, s_cale);
                s_cene.add(scene);

                var directionalLight = new THREE.DirectionalLight(0xffffff, 1.35, 1000);

                directionalLight.position.y = 500;
                directionalLight.position.x = 400;
                directionalLight.position.z = 300;
                directionalLight.castShadow = true;
                directionalLight.target = s_cene;
                s_cene.add(directionalLight);
                /*   */

                var bulbGeometry = new THREE.SphereBufferGeometry(5, 16, 8);
                bulbLight = new THREE.PointLight(0xffee88, 2.5, 2000, 2);

                ////////////////////////////////////////////////////////////////////////

                var spotLight = new THREE.SpotLight(0xaaaaaa);
                spotLight.castShadow = true;

                spotLight.shadow.mapSize.width = 1024;
                spotLight.shadow.mapSize.height = 1024;

                spotLight.shadow.camera.near = 500;
                spotLight.shadow.camera.far = 4000;
                spotLight.shadow.camera.fov = 300;
                bulbMat = new THREE.MeshStandardMaterial({
                    emissive: 0xffffff,
                    emissiveIntensity: 1,
                    color: 0xff0000
                });
                bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
                bulbLight.position.set(0, 300, 0);
                bulbLight.castShadow = true;
                s_cene.add(bulbLight);

                var light = new THREE.AmbientLight(0xffffff, .65); // soft white light
                s_cene.add(light);


                cameratrk = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 5000);
                cameratrk.position.z = 250;
                cameratrk.position.y = 0;
                s_cene.add(cameratrk);

                renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    canvas: ecanv1,
                    alpha: true
                });
                //	renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
                renderer.setClearColor(0x000000, 0);

                //      document.getElementById("slinght").style.display="block";
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.shadowMap.enabled = true;
                econtainer = document.getElementById("container");
                //        econtenedor.appendChild(renderer.domElement);

                if (!vr) {
                    WindowResize(ecanv1.width, ecanv1.width, cameratrk, renderer)
                    //  cameratrk=cameraobj;
                    // cameratrk.updateProjectionMatrix();
                    //         cameratrk.aspect = window.innerWidth / window.innerHeight;
                    // cameratrk.updateProjectionMatrix();
                }
                //""
                w_orld = sphere(2500, 100, 100, 'Img/world.png,0000ff', col, true, true);

                var obt = app.LoadText("theme", 'Img/world.png,0000ff');
                obt = obt.split(',');
                var col = parseInt(obt[1]); //alert(col);

                if (obt[0] != undefined || obt[0] != null) {
                    //   w_orld = sphere(2500, 100, 100, obt[0], col, true, true);
                    w_orld.material = material(obt[0], col);
                    w_orld.material.needsUpdate = true;
                }
                w_orld.name = "world";
                //renderOrder = 1
                var aa = obt[0] + "";
                if (aa === "clear white" || aa === "clear black" || aa === "white") {
                    setTimeout(function() {
                        settheme(obt[0]);
                    }, 1000);
                }
                w_orld.scale.x = -1;
                s_cene.add(w_orld);
                m = new THREE.MeshBasicMaterial({
                    color: 0xFF4500
                });

                controlsr = new THREE.DeviceOrientationControls(eyes);

                // controles.............................................
                controlstrack = new THREE.TrackballControls(cameratrk, renderer.domElement);
                controlstrack.rotateSpeed = 1.0;
                controlstrack.zoomSpeed = 1.2;
                controlstrack.panSpeed = 0.8;
                controlstrack.noZoom = false;
                controlstrack.noPan = false;
                controlstrack.staticMoving = true;
                controlstrack.dynamicDampingFactor = 0.3;
                controlstrack.keys = [65, 83, 68];
                controlstrack.addEventListener('change', render);


                matiron = material('', 0xffffff)
                // adjusttexture(matiron,1,3);
                if (vr) {
                    controlstrack.enabled = false;
                    controlsr.connect();
                } else {
                    controlstrack.enabled = true;
                    controlsr.desconnect;
                }
                if (baxis) s_cene.add(e_je);

                structural = new structural();

                window.addEventListener('resize', onWindowResize, false);
                app.Vibrate("80,80");

                //speech_OnResult(["cut"]);
                animate();
            }

            function Listen() {
                app.ShowPopup("I am listening...");
                app.TextToSpeech("what can I do for You?");
                app.HideProgress();
                speech.Recognize();
            }

             //Called with the recognition result(s).
            function speech_OnResult(results, partial) {
                //checar


                var cmd = results[0].toLowerCase();
                opc = cmd;
                if (opc === "go" || opc === "closer") {
                    move = "go";
                    mv.x = Math.cos(controlsr.alpha) * speed * Math.sign(controlsr.gamma) * -1;
                    mv.y = Math.sin(controlsr.gamma) * speed;
                    mv.z = Math.sin(controlsr.alpha) * speed * Math.sign(controlsr.gamma);
                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "back" || opc === "buck" || opc === "away") {

                    move = "go";
                    mv.x = Math.cos(controlsr.alpha) * speed * Math.sign(controlsr.gamma);
                    mv.y = Math.sin(controlsr.gamma) * speed * -1;
                    mv.z = Math.sin(controlsr.alpha) * speed * Math.sign(controlsr.gamma) * -1;
                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;

                }
                if (opc === "faster" || opc === "speed" || opc === "speedy" || opc === "fast" || opc === "quick" || opc === "quicker") {
                    rv_ += 1;
                }
                if (opc === "slower" || opc === "slow") {
                    if (rv_ > 1) rv_ -= 1;
                }


                if (opc === "return") {

                    move = "go";
                    mv.x *= -1;
                    mv.y *= -1;
                    mv.z *= -1;
                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "front" || opc === "ahead" || opc === "close") {
                    move = "go";
                    mv.x = Math.cos(controlsr.alpha) * speed * Math.sign(controlsr.gamma) * -1;
                    mv.y = 0;
                    mv.z = Math.sin(controlsr.alpha) * speed * Math.sign(controlsr.gamma);

                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "left" || opc === "lyft") {
                    move = "go";
                    mv.x = Math.cos(controlsr.alpha + Math.PI / 2) * speed * Math.sign(controlsr.gamma) * -1;
                    mv.y = 0;
                    mv.z = Math.sin(controlsr.alpha + Math.PI / 2) * speed * Math.sign(controlsr.gamma);

                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "right") {
                    move = "go";
                    mv.x = Math.cos(controlsr.alpha - Math.PI / 2) * speed * Math.sign(controlsr.gamma) * -1;
                    mv.y = 0;
                    mv.z = Math.sin(controlsr.alpha - Math.PI / 2) * speed * Math.sign(controlsr.gamma);

                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "low" || opc === "down" || opc === "bottom" || opc === "floor") {
                    move = "go";
                    mv.y = speed * -1;
                    mv.x = 0;
                    mv.z = 0;
                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "ground off" || opc === "ground of" || opc === "round off" || opc === "round of") todo.remove(ground);
                if (opc === "ground on") todo.add(ground);
                if (opc === "up" || opc === "app" || opc === "hop" || opc === "roof" || opc === "top" || opc === "sky") {
                    move = "go";
                    mv.y = speed;
                    mv.x = 0;
                    mv.z = 0;
                    peyes = {
                        x: eyes.position.x,
                        y: eyes.position.y,
                        z: eyes.position.z
                    };
                    vel = 0;
                }
                if (opc === "scale up" || opc === "bigger" || opc === "big") {
                    s_cale++;
                    setscale(scene, s_cale);

                }
                if (opc === "scale down" || opc === "smaller" || opc === "small") {
                    if (s_cale > 1) s_cale--;
                    setscale(scene, s_cale);

                }

                if (opc === "take a picture" || opc === "take a shoot") {

                    takepic()
                }
                if (opc === "magic") {
                    els.style.display = "none";
                    actualwindow = "vr"
                    rv_ = 1;
                    econtainer.style.top = '0%';
                    econtainer.style.height = '100%'
                    //  app.RemoveLayout(layp);
                    app.PreventScreenLock(true);
                    Listen();
                    // layp.Hide();
                    ededi.style.display = "none";
                    emenu.style.display = "none";
                    emenu2.style.display = "none";
                    todo.add(eyes);
                    ecanv1.style.top = "0%";
                    app.SetOrientation("Landscape");
                    app.SetScreenMode("Full");
                    vr = true;
                    controlstrack.enabled = false;
                    controlsr.connect(); //deviceorientation ctrl.
                }
                if (opc === "cut" || opc === "cat" || opc === "done" || opc === "kut" || opc === "exit") {
                    els.style.display = "block";

                    app.PreventScreenLock(true);
                    //   app.AddLayout(layp);
                    econtainer.style.top = '0%';
                    econtainer.style.height = '100%'

                    emenu.style.top = "48%";
                    emenu2.style.display = "flex";


                    emenu.style.display = "flex";
                    ecanv1.style.top = "00%";
                    //    app.SetScreenMode("Full");
                    vr = false;


                    document.body.style.display = "none";

                    app.SetOrientation("Portrait");

                    setTimeout(function() {
                        document.body.style.display = "block";
                    }, 350);


                    todo.remove(eyes);
                    renderer.setScissorTest(false);
                    controlstrack.enabled = true;
                    controlsr.disconnect(); //deviceorientation ctrl.
                    setTimeout(function() {
                        WindowResize(ecanv1.width, ecanv1.width, cameratrk, renderer);
                    }, 800);


                }

                if (opc === "stop" || opc === "okay") {
                    move = "stop";
                    rv_ = 1;
                }
                if (opc === "marker on") {
                    baxis = true;
                    s_cene.add(e_je);
                }
                if (opc === "marker off") {
                    baxis = true;
                    s_cene.remove(e_je);
                }

                if (opc === "light on") {
                    els.style.opacity = 1;
                    blight = true;
                    s_cene.add(bulbLight);
                }
                if (opc === "light off") {
                    els.style.opacity = .3;
                    blight = true;
                    s_cene.remove(bulbLight);
                }


                if (vr) speech.Recognize();


                //    app.ShowPopup(cmd);

            }

             //Called if recognition fails.
            function speech_OnError(error) {
                console.log("Error" + error);

                //Restart recognition.
                if (!speech.IsListening()) speech.Recognize();
            }

            function animate() {
                if (brender) requestAnimationFrame(animate);
                if (vr) controlsr.update();
                else controlstrack.update();
                render();

            }
            var rot = 0,
                vel = .001,

                peyes = {
                    x: eyes.position.x,
                    y: eyes.position.y,
                    z: eyes.position.z
                };

            function render() {
                rot++;
                if (move != "stop") vel += rv_;

                if (vr) {
                    if (move === "go") {
                        eyes.position.z = vel * mv.z + peyes.z;
                        eyes.position.y = vel * mv.y + peyes.y;
                        eyes.position.x = vel * mv.x + peyes.x;
                    }

                    renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
                    renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
                    renderer.setScissorTest(true);
                    cameral.aspect = (window.innerWidth / 2) / window.innerHeight;
                    cameral.updateProjectionMatrix();
                    renderer.render(s_cene, cameral);

                    renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
                    renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
                    renderer.setScissorTest(true);
                    camerar.aspect = (window.innerWidth / 2) / window.innerHeight;
                    camerar.updateProjectionMatrix();
                    renderer.render(s_cene, camerar);
                } else renderer.render(s_cene, cameratrk);

                ////
                if (blight) {
                    bulbLight.position.x = Math.sin(rot / 1000) * 400;;
                    bulbLight.position.z = Math.cos(rot * 8 / 500) * 500;;
                    bulbLight.position.y = 300 + Math.sin(rot / 100) * 400;;

                }


                if (arani.length > 0) {
                    for (var i = 0; i < arani.length; i++) {
                        if (arani[i] != undefined && arani[i].animation) {
                            var ob = arani[i];
                            // app.ShowPopup(ob.spinY);
                            ob.obj.rotateX(ob.spinX);
                            ob.obj.rotateY(ob.spinY);
                            ob.obj.rotateZ(ob.spinZ);

                            ob.obj.position.x = ob.posx + ob.giroRX * Math.cos(ob.giroX * rot);
                            ob.obj.position.y = ob.posy + ob.giroRY * Math.sin(ob.giroY * rot);
                            ob.obj.position.z = ob.posz + ob.giroRZ * Math.sin(ob.giroZ * rot);
                        }
                    }
                }
            }

            function WindowResize(x, y, cam, rend) {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                cam.aspect = x / y;
                cam.updateProjectionMatrix();
                rend.setSize(x, y);

            }

            function onWindowResize() {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                //   cameratrk.aspect = window.innerWidth / window.innerHeight;
                // cameratrk.updateProjectionMatrix();
                //renderer.setSize(window.innerWidth, window.innerHeight);
                WindowResize(window.innerWidth, window.innerHeight, cameratrk, renderer)
            }

            function fullscreen() {

                if (bfullscreen) {
                    actualwindow = "main"
                    emenu.style.top = "48%";
                    emenu2.style.display = "flex";
                    // WindowResize(canv1.width,canv1.height,cameratrk,renderer);
                    efullsc.innerHTML = "Full<br>Screen";
                    speech_OnResult(['cut'])
                    bfullscreen = false;
                } else {
                    actualwindow = "fullsc"
                    emenu2.style.display = "none";
                    app.SetScreenMode("Full");
                    efullsc.innerHTML = "BACK";
                    bfullscreen = true;
                    emenu.style.top = "85%";
                    WindowResize(window.innerWidth, window.innerHeight, cameratrk, renderer);
                }
            }

            function openmenu() {
                actualwindow = "menu"
                if (!bfullscreen) {
                    var totalnote = getnotif();
                    var nota = app.LoadText("cad nota", "Not notes jet");
                    if (nota != totalnote) {
                        app.SaveText("cad nota", totalnote);
                        app.SaveBoolean("notaa", true);

                    }
                    app.Vibrate("80,80");
                    eabout.src = "menu.html";
                    eabout.style.display = "block";
                    eabout.style.border = "none";
                    eabout.style.background = "transparent"
                } else {
                    app.ShowPopup("You need to Exit Full Screen Mode");
                }
            }

            function opcmen(opc) {

                closemen();
                //dlgTxt.Hide();
                if (opc === "Vr quick") {
                    alert('\n-have your Vr Goggles ready and press Vr button on the editor screen or the big center button-\n======================================================\nVOICE COMMAND INSTRUCTIONS:\n\n-Move up ...... "up", "sky", "top" or "roof"\n\n-Move left ...... "left"\n\n-Move right ...... "right"\n\n-Move down ......"down", "bottom" or "floor"\n\n' +
                        '-Go horizontally in the direction that you are looking at ...... "front" or "close"\n\n-Stop ...... "stop" or "Okay"\n\n-Move in the direction of the screen that you are looking at ...... "go" or "closer"\n\n' +
                        '-Get away from the direction that you are looking at ...... "back"\n\n-Go back to the direction that your are moving ...... "return"\n\n' +
                        '-Move faster ...... "Quick" or "Faster"\n\n-Slow down ...... "slower","slow"\n\n"-Increase view size ...... "scale up", "big" or "bigger"\n\n-Decrease view size ...... "scale down", "small" or "smaller"\n\n' +
                        '-Show Light ...... "light on"\n\n-Hide Light ...... "marker off"\n\n-Show Axis ...... "marker on"\n\n-Hide Axis ...... "marker off"\n\n-If the navigation button are shown in Vr mode say "MAGIC" to set full Vr mode again\n\n-Exit Virtual mode ...... "Exit" or "Cut"\n\n**If more than one command provided for a function, use any...');
                }

                if (opc === "Exit") {
                    actualwindow = "main";
                    OnBack()
                } // app.Exit();
                if (opc === "Axis on") baxis = true;
                if (opc === "Axis off") baxis = false;

                if (opc === "Open Project") {
                    app.Vibrate("80,80");
                    //    dlgTxt.Hide();

                    var list = app.ListFolder("/sdcard/cad 360Vr/Projects/", ".txt");

                    dlgTxt = app.CreateDialog("Menu: " + actualproject);
                    var lay = app.CreateLayout("linear", "vertical,fillxy,left");
                    // lay.SetSize(.7,.7);
                    lay.SetPadding(0.02, 0, 0.02, 0.02);
                    lay.SetBackColor('white');
                    dlgTxt.AddLayout(lay);
                    ls = app.CreateList(list, 0.8, 0.4);
                    ls.SetTextSize(18);
                    ls.SetTextColor("#0000ff");
                    lay.AddChild(ls);
                    dlgTxt.Show();
                    ls.SetOnTouch(function(f) {
                        actualproject = f;
                        eedi.value = app.ReadFile("/sdcard/cad 360Vr/Projects/" + f);
                        app.SaveText("codestemp", eedi.value);
                        openedit();
                        dlgTxt.Hide();

                    });

                    dlgTxt.Show();
                }
                if (opc === "Notification") {
                    //     var totalnote=getnotif(); 
                    var totalnote = app.LoadText("cad nota", "No notes jet");
                    app.Wait(.01);
                    eabout.contentWindow.document.write(totalnote) // good,,,
                    eabout.style.display = "block";
                    app.SaveBoolean("notaa", false);
                }
                if (opc === "Save Project") {
                    var ff = prompt("Type Project Name?", actualproject);
                    var n = ff + ".txt";
                    var f = app.LoadText("codestemp", "");
                    var fi = "/sdcard/cad 360Vr/Projects/" + n;
                    var m = false;
                    if (app.FileExists(fi)) {
                        m = confirm("File Exist, Do you want to replace it?");
                        if (m) {
                            app.WriteFile(fi, f);
                            actualproject = n;
                        }
                    } else {
                        app.WriteFile(fi, f);
                        actualproject = n;
                    }
                }

                if (opc === 'open example') {
                    openhand();
                    openedit()
                    addlist("examples");

                }
                if (opc === 'Export Obj') {
                    var obj = prompt('Type Object "name" you want to Export, or Type scene to Export all\n\nRemember to set a name to your object like: myObject.name="objName"', "scene");
                    var filename = prompt("File Name?", "obj");
                    if (obj != "scene") {
                        mesh = s_cene.getObjectByName(obj);
                        if (mesh != null || mesh != undefined) exportToObj(mesh, obj);
                    } else {
                        exportToObj(scene, filename);
                    }
                }
                if (opc === "Delete Project") {
                    if (confirm("Are you sure You want to Delete? " + actualproject)) {
                        app.DeleteFile("/sdcard/Cad 360Vr/Projects/" + actualproject);
                    }
                }
                if (opc === "New Project") {
                    alert("To start new project:\n\nSave your actual project if your have one open\n\nClear Editor and write your new codes\n\nWhen ready go to Save Project and Overwrite Project Name");
                }

                if (opc === "Settings") {

                    dlgTxt = app.CreateDialog("Settings:");
                    var lay = app.CreateLayout("linear", "vertical,fillxy,left");
                    lay.SetPadding(0.02, 0, 0.02, 0.02);
                    lay.SetBackColor('white');
                    dlgTxt.AddLayout(lay);
                    var settinglist = "Set Scene Theme,Show Axis,Hide Axis,Set Light On,Set Light Off,Set Scale";
                    var ls = app.CreateList(settinglist, 0.8, 0.5);
                    ls.SetTextSize(18);
                    ls.SetTextColor("#0000ff");
                    ls.SetOnTouch(function(r) {
                        setSettings(r);
                        dlgTxt.Hide();
                    });
                    lay.AddChild(ls);
                    dlgTxt.Show();


                }
                if (opc === "About") {
                    actualwindow = "about"

                    eabout.setAttribute("id", "iabout");
                    eabout.src = "aboutdlg.html";
                    idbk = 'iabout';
                    //  eabout.contentWindow.id=idbk;
                    eabout.style.display = "block";
                }

                //Show which fruit the user chose.

            }

            function takepic() {
                 eclick.play();
                pr = 2;
                app.Vibrate("50,100,50,150");
                orx = ecanv1.width;
                ory = ecanv1.height
                ecanv1.width = orx * pr;
                ecanv1.height = ory * pr;
                if (!vr) {
                    renderer.render(s_cene, cameratrk);
                    WindowResize(orx * pr, ory * pr, cameratrk, renderer);
                    //
                    renderer.render(s_cene, cameratrk);
                } else {
                    render();

                }
                var d = new Date();
                var n = d.toString().split("GMT");
                var filename = "Cad360_" + n[0] + ".png";
                download(fold, filename, ecanv1);

                ecanv1.width = orx;
                ecanv1.height = ory;
                WindowResize(orx, ory, cameratrk, renderer);
            }

            function vri() {

            }
            var bedi = false;
            eoedi = document.getElementById('oedi');

            function openedit() {

                app.Vibrate("80,80");

                if (!bedi) {
                    els.style.display = "none";
                    eedi.value = app.LoadText("codestemp", "//No Codes Yet...");
                    brender = false;
                    ededi.style.display = "block";
                    bedi = true;
                    eoedi.innerHTML = "Close Editor";
                    emenu.style.display = "none";
                    eovr.style.top = '200%';
                } else {
                    els.style.display = "block";
                    brender = true;
                    ededi.style.display = "none";
                    bedi = false;
                    eoedi.innerHTML = "Open Editor";
                    emenu.style.display = "flex";
                    //  eovr.style.display = "block"; 
                    eovr.style.top = '10%';
                    animate();
                }
            }

            function process() {

                app.ShowProgress("Processing...");
                app.Vibrate("80,80");
                var cod = eedi.value;
                app.SaveText("codestemp", cod);
                try {
                    clearThree(scene);

                    //    brender=true;
                    openedit();


                    cod += ";brender=true;render();animate();"
                    app.Wait(.5)
                    eval(cod + ';app.HideProgress();');


                } catch (er) {
                    app.HideProgress();
                    alert(er)
                }

            }

            function clearThree(obj) {
                while (arani.length > 0) {
                    arani.pop();
                }
                while (obj.children.length > 0) {
                    clearThree(obj.children[0])
                    obj.remove(obj.children[0]);
                }
                if (obj.geometry) obj.geometry.dispose()
                if (obj.material) obj.material.dispose()
                if (obj.texture) obj.texture.dispose()
            }

            function add(func) {
                app.Vibrate("80,80");
                if (func == 'Texture') {
                    f = app.ChooseFile("Choose a pic", "",
                        function(f) {
                            insert(eedi, f);
                            openhand()
                        })
                } else {

                    //   app.ShowPopup("Replace the underlined variable for your value");
                    if (func.indexOf('#') == 0 && func.length == 7) {
                        func = func.replace("#", "0x");
                        insert(eedi, func);
                        openhand()
                    } else {
                        insert(eedi, func);
                        // eobjetos.style.left = '120%'; bobject=false;
                        openhand()
                    }
                }
            }

            function openhand() {
                // var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
                app.Vibrate("80,80");
                // app.ShowPopup(eobjetos.style.left);
                if (bobjetos) {
                    bobjetos = false;
                    eobjetos.style.left = "30%";
                } else {
                    bobjetos = true;
                    eobjetos.style.left = "120%";

                }
            }

            function addlist(lista) {

                var opclist = "";
                if (lista === "shortcuts") opclist = shortcutlist;
                if (lista === "structural") opclist = stlistn; //geolist;
                if (lista === "objs") opclist = objlist; //meshlist;
                //  if (lista === "operations") opclist = operationlist;
                //   if (lista === "settings") opclist = settinglist;
                if (lista === "examples") opclist = examplelist;
                if (lista === "maths") opclist = mathlist;

                dlgTxt = app.CreateDialog(lista + ":");
                var lay = app.CreateLayout("linear", "vertical,fillxy,left");
                lay.SetPadding(0.02, 0, 0.02, 0.02);
                lay.SetBackColor('white');
                dlgTxt.AddLayout(lay);
                var ls = app.CreateList(opclist, 0.8, 0.5);
                ls.SetTextSize(18);
                ls.SetTextColor("#0000ff");
                ls.SetOnTouch(function(r) {

                    if (lista === "maths") {
                        if (r === "?") {
                            app.OpenUrl('https://www.w3schools.com/js/js_math.asp')

                        } else {
                            add(rr);
                        }
                    }
                    if (lista === "examples") {
                        actualproject = r;
                        eedi.value = app.ReadFile("Misc/examples/" + r);
                        app.SaveText("codestemp", eedi.value);
                        openhand()
                    }

                    if (lista === "structural") {
                        if (r === "?") {
                            alert(quickstructural);
                            // add("");
                        } else {
                            var o = stlistn.split(",");
                            var aro = stlist.split(",");
                            var ro = aro[o.indexOf(r)]; //    alert(ro)
                            var rr = ro.replace(/&/g, ",")
                            add(rr);
                        }
                    }
                    if (lista === "objs") {
                        if (r != "?") {
                            var o = objlist.split(",");
                            var aro = objf.split(",");
                            var ro = aro[o.indexOf(r)]; //    alert(ro)
                            var rr = ro.replace(/&/g, ",")

                            add(rr);
                        } else {
                            alert(objhelp);

                        }
                    }

                    if (lista != "geos" && lista != "objs" && lista != "structural" && lista != "examples" && lista != "maths") {
                        if (r === "?") {
                            alert(shortcuthelp);
                        } else {
                            if (r === "animateObj( ... )") {
                                r = "animateObj({\nobj: _ ,\nspinX: 0 , \nspinY: 0 , \nspinZ: 0 , \ngiroX: 0 , \ngiroY: 0 , \ngiroZ: 0 , \ngiroRX: 0 , \ngiroRY: 0 , \ngiroRZ: 0\n})\n";
                            }
                            r = r.replace(/;/g, ":");
                            r = r.replace(/&/g, ",");
                            r = r.replace(/^q^/g, '"');
                            add(r);
                        }
                    }



                    dlgTxt.Hide();
                });
                lay.AddChild(ls);
                dlgTxt.Show();
            }

            function oppub() {
                //  app.ShowPopup("abrir en nueva ventana");
                app.OpenUrl('https://play.google.com/store/apps/details?id=com.jauregui.tubebendingtoolandlevelpv')
            }

            function cleareditor() {
                if (confirm("Are your sure you want to delete content???")) {
                    eedi.value = "";
                    app.SaveText("codestemp", "");
                    openhand()
                }
            }

            function setSettings(opc) {
                if (opc === "Show Axis") {
                    baxis = true;
                    s_cene.add(e_je);
                }
                if (opc === "Hide Axis") {
                    baxis = true;
                    s_cene.remove(e_je);
                }
                if (opc === "Set Light On") {
                    els.style.opacity = 1;

                    blight = true;
                    s_cene.add(bulbLight);
                }
                if (opc === "Set Light Off") {
                    els.style.opacity = .3;
                    blight = false;
                    s_cene.remove(bulbLight);
                }
                if (opc === "Set Scene Theme") {
                    eabout.setAttribute("id", "iabout");
                    eabout.src = 'settheme.html';
                    eabout.style.display = "block";

                }
                if (opc === "Set Scale") {
                    eabout.setAttribute("id", "iabout");
                    eabout.src = 'setscaledlg.html';
                    eabout.style.display = "block";

                }

            }

            function animateObj(parameters) {
                //ob, gx, gy, gz
                if (parameters.obj != undefined) {
                    var nani = new ob_animate();
                    nani.posx = parameters.obj.position.x;
                    nani.posy = parameters.obj.position.y;
                    nani.posz = parameters.obj.position.z;
                    nani.giro = false;
                    if (parameters.giroX != undefined) {
                        nani.giroX = parameters.giroX
                    } else nani.giroX = 0;
                    if (parameters.giroY != undefined) {
                        nani.giroY = parameters.giroY
                    } else nani.giroY = 0;
                    if (parameters.giroZ != undefined) {
                        nani.giroZ = parameters.giroZ;
                    } else nani.giroZ = 0;
                    if (parameters.giroRX != undefined) {
                        nani.giroRX = parameters.giroRX;
                    } else nani.giroRX = 0;
                    if (parameters.giroRY != undefined) {
                        nani.giroRY = parameters.giroRY;
                    } else nani.giroRY = 0;
                    if (parameters.giroRZ != undefined) {
                        nani.giroRZ = parameters.giroRZ;
                    } else nani.giroRZ = 0;
                    if (parameters.spinX != undefined) {
                        nani.spinX = parameters.spinX
                    } else nani.spinX = 0;
                    if (parameters.spinY != undefined) {
                        nani.spinY = parameters.spinY
                    } else nani.spinY = 0;
                    if (parameters.spinZ != undefined) {
                        nani.spinZ = parameters.spinZ;
                    } else nani.spinZ = 0;
                    nani.animation = true;
                    // alert(nani.spinY);
                    nani.obj = parameters.obj;
                    arani.push(nani);
                }

            }
            /*
            function animateObj(ob, gx, gy, gz) {

                var nani = new ob_animate();
                nani.giro = false;
                if (gx != undefined) {
                    nani.giro = true;
                    nani.giroX = gx
                } else nani.giroX = 0;
                if (gy != undefined) {
                    nani.giro = true;
                    nani.giroY = gy
                } else nani.giroY = 0;
                if (gz != undefined) {
                    nani.giro = true;
                    nani.giroZ = gz
                } else nani.giroZ = 0;

                nani.animation = true;
                nani.obj = ob;
                arani.push(nani);

            }
*/
            function stopanimation() {
                ob_animate.animation = false;
                ob_animate.giro = false;
            }

            function openhelp() {
                app.OpenUrl('https://lrjauregui4.wixsite.com/cad360vrsite')
            }




            function setlista(list, elem) {
                lis = list.split(",");
                var el;
                for (i = 0; i < lis.length; i++) {
                    el = document.createElement("option");
                    el.value = lis[i];
                    el.innerHTML = lis[i];
                    elem.appendChild(el);
                }


            }

            function setscale(obj, s) {
                obj.scale.set(s, s, s);
                render();
                app.ShowPopup("Scale: 1:" + s);
            }

            function settheme(opc) {

                var ww = s_cene.getObjectByName("world");
                if (ww === undefined) s_cene.add(w_orld);
                if (opc === 'default') {
                    w_orld.material.map = new THREE.TextureLoader().load('Img/world.png', function() {
                        w_orld.material.color = new THREE.Color(0x0000ff);
                        w_orld.material.needsUpdate = true;
                        app.SaveText("theme", 'Img/world.png,0x0000ff')

                    })

                }
                if (opc === 'custom') {
                    app.ShowPopup("Choose a picture");

                    app.ChooseFile("Choose a picture", "",
                        function(f) {

                            w_orld.material.map = new THREE.TextureLoader().load(f, function() {
                                w_orld.material.color = new THREE.Color(0xffffff);
                                w_orld.material.needsUpdate = true;
                                app.SaveText("theme", f + ',0xffffff')
                            })
                        })
                }

                if (opc === 'clear black') {
                    ecanv1.style.background = "#000000";
                    renderer.setClearColor(0x000000, 0);
                    s_cene.remove(w_orld);
                    app.SaveText("theme", opc + ',0x000000')
                }
                if (opc === 'clear white') {
                    ecanv1.style.background = "#ffffff";
                    renderer.setClearColor(0xffffff, 0);
                    s_cene.remove(w_orld);
                    app.SaveText("theme", opc + ',0xffffff')
                }

                if (opc === 'white') {
                    w_orld.material.map = null;
                    w_orld.material.needsUpdate = true;
                    w_orld.material.color = new THREE.Color(0xffffff);
                    app.SaveText("theme", opc + ',0xffffff')
                }

                render();
            }

            function OnBack() {
                if (actualwindow === "main") {
                    var c = confirm("Exit App?");
                    if (c) salir();
                }
                if (actualwindow === "about") {
                    eabout.contentWindow.cerrar();
                    actualwindow = "main"
                }
                if (actualwindow === "vr") {
                    speech_OnResult(['cut'])

                    //  fullscreen()
                    actualwindow = "main"
                }

                if (actualwindow === "fullsc") {
                    // speech_OnResult(['cut'])

                    fullscreen()
                    actualwindow = "main"
                }
                if (actualwindow === "menu") {
                    closemen();
                    actualwindow = "main"
                }

            }

            function salir() {
                app.Vibrate("100,30");
                msgex();

                setTimeout('app.Exit()', 2500);
            }

            function msgex() {
                app.Vibrate("100,30");
                var msg = "for suggestion please contact developer,come back soon,Don't forget to rate this app. thank you,nice to have you here,God Bless you,Have a nice day,Have a productive day,Take care,Have a great day,See you soon";
                msg = msg.split(',');
                try {
                    var nmsg = (Math.random() * msg.length).toFixed(0);
                    if (msg[nmsg] === undefined) {
                        app.ShowPopup(msg[2]);
                        app.TextToSpeech(msg[2]);
                    } else {
                        app.ShowPopup(msg[nmsg]);
                        app.TextToSpeech(msg[nmsg]);
                    }
                } catch (er) {
                    //	app.ShowPopup(er);
                };
            }

            function setlight() {
                if (!blight) {
                    blight = true;
                    s_cene.add(bulbLight);

                    els.style.opacity = 1;
                } else {
                    blight = false;
                    s_cene.remove(bulbLight);

                    els.style.opacity = .3;

                }
            }

            function setmenudlg(list, fn) {

                dlgTxt = app.CreateDialog("Menu: " + actualproject);
                var lay = app.CreateLayout("linear", "vertical,fillxy,left");
                // lay.SetSize(.7,.7);
                lay.SetPadding(0.02, 0, 0.02, 0.02);
                lay.SetBackColor('white');
                dlgTxt.AddLayout(lay);
                ls = app.CreateList("", 0.8, 0.4);
                ls.SetTextSize(18);
                ls.SetTextColor("#0000ff");
                lay.AddChild(ls);
                return ls;
            }

            function getpage(url) {

                if (navigator.onLine) {


                    file = url;
                    try {
                        var rawFile = new XMLHttpRequest();
                        rawFile.open("GET", file, false);
                        rawFile.onreadystatechange = function() {
                            if (rawFile.readyState === 4) {
                                if (rawFile.status === 200 || rawFile.status == 0) {
                                    at = rawFile.responseText;

                                }
                            }
                        }
                        rawFile.send(null);
                    } catch (er) {
                        //     at=app.ReadFile("Misc/page.txt");
                        at = "";
                        app.ShowPopup(er);
                    }
                    if (at === "") at = "<p style='font-size:40px;font-weight:bold;color:red;'>You Are Off Line...</p>";
                    return at;
                    //   app.SaveText("wtext",at);
                } else {
                    app.ShowPopup("Your are Offline... Check your internet connection");
                    alert(navigator.onLine)
                    return ". . ."
                }
            }

            function closemen() {
                app.Vibrate("80,80");
                eabout.src = "";
                //                 eabout.srcdoc="";
                eabout.style.display = "none";
                eabout.style.border = "solid";
                eabout.style.background = "white"
            }

            function getnotif() {
                var nota = getpage('https://ljlapps.wordpress.com/2017/03/02/first-blog-post')

                var ind = nota.indexOf('<div id="notificacion_global');
                var indend = nota.indexOf('<p id="the_end">.</p>', ind);
                var globalnote = nota.slice(ind, indend - 3);

                nota = getpage('https://ljlapps.wordpress.com/2018/08/12/notifications')
                ind = nota.indexOf('<div id="cad360"');
                indend = nota.indexOf('id="the end">', ind);
                var localnote = nota.slice(ind, indend + 21);
                var totalnote = globalnote + "<br><br>...................................................<br><br>" + localnote;
                return totalnote;
            }

            function exportToObj(obj, name) {
                var exporter = new THREE.OBJExporter();
                var result = exporter.parse(obj);
                app.WriteFile("/sdcard/Cad 360Vr/Obj Files/" + name + ".txt", result);
                app.WriteFile("/sdcard/Cad 360Vr/Obj Files/" + name + ".obj", result);
            }

            function closeiframe() {
                eabout.src = "";
                eabout.style.display = "none"
            }


             //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </script>