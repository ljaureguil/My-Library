//<script src="https://cdn.rawgit.com/ljaureguil/My-Library/7a86fc79/MyLib.js"></script>


/*
 var script = document.createElement("script")
    script.type = "text/javascript";
    script.src="ThreeCSG.js";
    document.appendChild(script);
 */
var Obj, state = false;
/**/v
function gsubtract(fromob, ob) {
  //  alert(fromob)
    var ob1 = fromob,
        ob2 = ob,
        geom = new THREE.Geometry();

    if (fromob.isGeometry) ob1 = fromob;
    if (fromob.isBufferGeometry) ob1 = new THREE.Geometry().fromBufferGeometry(fromob);
    if (ob.isGeometry) ob2 = ob;
    if (ob.isBufferGeometry) ob2 = new THREE.Geometry().fromBufferGeometry(ob); 
 //   alert(ob1+ob2)
    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);
   
    var subtract_bsp = ob1_bsp.subtract(ob2_bsp);
    var geom = subtract_bsp.toGeometry();
    geom.computeVertexNormals();
    // verts = geom.vertices;
    //for (let i = 0; i < verts.length; i++){	verts[i].setX(verts[i].x * -1);}
    //geom.verticesNeedUpdate = true;   

    return geom;
}

function gunion(fromob, ob) {
    var ob1 = fromob,
        ob2 = ob,
        geom = new THREE.Geometry();

    if (fromob.isGeometry) ob1 = fromob;
    if (fromob.isBufferGeometry) ob1 = new THREE.Geometry().fromBufferGeometry(fromob);
    if (ob.isGeometry) ob2 = ob;
    if (ob.isBufferGeometry) ob2 = new THREE.Geometry().fromBufferGeometry(ob);
    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);
    var subtract_bsp = ob1_bsp.union(ob2_bsp);
    var geom = subtract_bsp.toGeometry();
    geom.computeVertexNormals();
    return geom;
}

function gintersection(fromob, ob) {
    var ob1 = fromob,
        ob2 = ob,
        geom = new THREE.Geometry();

    if (fromob.isGeometry) ob1 = fromob;
    if (fromob.isBufferGeometry) ob1 = new THREE.Geometry().fromBufferGeometry(fromob);
    if (ob.isGeometry) ob2 = ob;
    if (ob.isBufferGeometry) ob2 = new THREE.Geometry().fromBufferGeometry(ob);
    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);
    var intersect_bsp = ob1_bsp.intersect(ob2_bsp);
    var geom = intersect_bsp.toGeometry();
    geom.computeVertexNormals();
    return geom;
}




function libloaded() {
    return true
}

function subtract(parameters) {
    var ob1, ob2;

    var material;
    var container;
    if (parameters.material != undefined) material = parameters.material;
    if (parameters.container != undefined) container = parameters.container;

    if (parameters.fromob != undefined && parameters.ob != undefined) {
        if (parameters.fromob.isGeometry) {
            ob1 = parameters.fromob;
        }
        if (parameters.fromob.isBufferGeometry) {
            ob1 = new THREE.Geometry().fromBufferGeometry(parameters.fromob);

        }
        if (parameters.fromob.isMesh) {
            var g = parameters.fromob.geometry;
            if (g.isGeometry) ob1 = g;
            else ob1 = new THREE.Geometry().fromBufferGeometry(g);

        }
        if (parameters.ob.isGeometry) {
            ob2 = parameters.ob;

        }
        if (parameters.ob.isBufferGeometry) {
            ob2 = new THREE.Geometry().fromBufferGeometry(parameters.ob);

        }
        if (parameters.ob.isMesh) {
            var g = parameters.ob.geometry;
            if (g.isGeometry) ob2 = g;
            else ob2 = new THREE.Geometry().fromBufferGeometry(g);

        }
    }

    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);
    var subtract_bsp = ob1_bsp.subtract(ob2_bsp);
    var geom = subtract_bsp.toGeometry();
    geom.computeVertexNormals();
    if (container != undefined) {
        var res = new THREE.Mesh(geom, material);
        res.name = parameters.name;
        container.add(res);
    } else {
        return geom;
    }

}

function intersect(parameters) {
    var ob1, ob2;

    var material;
    var container;
    if (parameters.material != undefined) material = parameters.material;
    if (parameters.container != undefined) container = parameters.container;

    if (parameters.fromob != undefined && parameters.ob != undefined) {
        if (parameters.fromob.isGeometry) {
            ob1 = parameters.fromob;

        }
        if (parameters.fromob.isBufferGeometry) {
            ob1 = new THREE.Geometry().fromBufferGeometry(parameters.fromob);

        }
        if (parameters.fromob.isMesh) {
            var g = parameters.fromob.geometry;
            if (g.isGeometry) ob1 = g;
            else ob1 = new THREE.Geometry().fromBufferGeometry(g);

        }
        if (parameters.ob.isGeometry) {
            ob2 = parameters.ob;

        }
        if (parameters.ob.isBufferGeometry) {
            ob2 = new THREE.Geometry().fromBufferGeometry(parameters.ob);

        }
        if (parameters.ob.isMesh) {
            var g = parameters.ob.geometry;
            if (g.isGeometry) ob2 = g;
            else ob2 = new THREE.Geometry().fromBufferGeometry(g);

        }
    }

    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);
    var intersect_bsp = ob1_bsp.intersect(ob2_bsp);
    var geom = intersect_bsp.toGeometry();
    geom.computeVertexNormals();
    if (container != undefined) {
        var res = new THREE.Mesh(geom, material);
        res.name = parameters.name;
        container.add(res);
    } else {
        return geom;
    }

}

function union(parameters) {
    var ob1, ob2;

    var material;
    var container;
    if (parameters.material != undefined) material = parameters.material;
    if (parameters.container != undefined) container = parameters.container;

    if (parameters.fromob != undefined && parameters.ob != undefined) {
        if (parameters.fromob.isGeometry) {
            ob1 = parameters.fromob;

        }
        if (parameters.fromob.isBufferGeometry) {
            ob1 = new THREE.Geometry().fromBufferGeometry(parameters.fromob);

        }
        if (parameters.fromob.isMesh) {
            var g = parameters.fromob.geometry;
            if (g.isGeometry) ob1 = g;
            else ob1 = new THREE.Geometry().fromBufferGeometry(g);

        }
        if (parameters.ob.isGeometry) {
            ob2 = parameters.ob;

        }
        if (parameters.ob.isBufferGeometry) {
            ob2 = new THREE.Geometry().fromBufferGeometry(parameters.ob);

        }
        if (parameters.ob.isMesh) {
            var g = parameters.ob.geometry;
            if (g.isGeometry) ob2 = g;
            else ob2 = new THREE.Geometry().fromBufferGeometry(g);

        }
    }

    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);
    var subtract_bsp = ob1_bsp.union(ob2_bsp);
    var geom = subtract_bsp.toGeometry();
    geom.computeVertexNormals();
    if (container != undefined) {
        var res = new THREE.Mesh(geom, material);
        res.name = parameters.name;
        container.add(res);
    } else {
        return geom;
    }

}

function adjusttexture(mate, nx, ny, ang, offsetX, offsetY) {
    if (mate.isMaterial) {

        if (ang != undefined) mate.map.rotation = ang * 1; // rotation is around [ 0.5, 0.5 ]
        if (offsetY != undefined && offsetX != undefined) mate.map.offset.set(offsetX, offsetY);
        if (nx != undefined && nx != undefined) {
            mate.map.wrapS = THREE.RepeatWrapping;
            mate.map.wrapT = THREE.RepeatWrapping;
            mate.map.repeat.set(nx, ny);

        }

    }

}

function unionG(ob1, ob2) {
    if (ob1.isBufferGeometry) ob1 = ob1.fromBufferGeometry();
    if (ob2.isBufferGeometry) ob2 = ob2.fromBufferGeometry();

    var ob1_bsp = new ThreeBSP(ob1);
    var ob2_bsp = new ThreeBSP(ob2);

    var union_bsp = ob1_bsp.union(ob2_bsp);

    var result = union_bsp.toGeometry();
    result.computeVertexNormals();

    return result;


}

function cylindro(parameters) {

    var container = null;

    var geo;
    var mesh;
    var r1 = 1;
    var r2 = 1;
    var h = 1;
    var sh = 10;
    var sv = 10;
    var cup = false;
    var buffer = true;
    var material = null;
    var textura = 'data:image/jpeg;base64,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';
    if (parameters.r1 != undefined) r1 = parameters.r1;
    if (parameters.r2 != undefined) r2 = parameters.r2;
    if (parameters.h != undefined) h = parameters.h;
    if (parameters.sh != undefined) sh = parameters.sh;
    if (parameters.sv != undefined) sv = parameters.sv;
    if (parameters.cup != undefined) cup = parameters.cup;
    if (parameters.buffer != undefined) buffer = parameters.buffer;
    if (buffer) geo = new THREE.CylinderBufferGeometry(r1, r2, h, sh, sv);
    else geo = new THREE.CylinderGeometry(r1, r2, h, sh, sv)

    if (parameters.container != undefined) container = parameters.container;
    else {
        geo.name = parameters.name;
        return geo;
    }

    //////////////////////////////////////////////////////

    // CHECK THIS PART... 

    if (parameters.textura == undefined && parameters.material == undefined) {

        material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geo, material);
        mesh.name = parameters.name;
        container.add(mesh);

    }
    /////////////////////////////////////////////////////////


    if (parameters.textura != undefined && material == undefined) {
        textura = parameters.textura;
        var loader = new THREE.TextureLoader();

        loader.load(textura,
            function(texture) {
                material = new THREE.MeshBasicMaterial({
                    map: texture
                });
                mesh = new THREE.Mesh(geo, material);
                mesh.name = parameters.name;
                container.add(mesh); //alert(container.getObjectByName("cylindro"))
                //   alert(" bafore return mesh,  Material looks ok \n\n"+mesh.material); 
            });
    }
    if (parameters.material != undefined) {
        material = parameters.material;
        mesh = new THREE.Mesh(geo, material);
        mesh.name = parameters.name;
        container.add(mesh);
        //   return mesh;
    }

}


function cubo(parameters) { //alert(parameters.material);
    var container = null;
    var geo;
    var mesh;
    var w = 1;
    var l = 1;
    var h = 1;
    var buffer = true;
    var material = null;
    var textura = 'https://helix.northwestern.edu/sites/helix/files/styles/16by9/public/wp-content/uploads/2013/11/iStock_000013954612Small_crop.png?itok=2y4YsOrt';
    if (parameters.w != undefined) w = parameters.w;
    if (parameters.l != undefined) l = parameters.l;
    if (parameters.h != undefined) h = parameters.h;
    if (parameters.buffer != undefined) buffer = parameters.buffer;
    if (buffer) geo = new THREE.BoxBufferGeometry(w, l, h);
    else {
        geo = new THREE.BoxGeometry(w, l, h); //alert("no bug");
    }

    if (parameters.container != undefined) container = parameters.container;
    else {
        geo.name = parameters.name;
        return geo;
    }

    if (parameters.textura == undefined && parameters.material == undefined) {

        material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geo, material);
        mesh.name = parameters.name;

        container.add(mesh); //alert("cub own");

    }

    if (parameters.textura != undefined && material == undefined) {
        textura = parameters.textura;
        var loader = new THREE.TextureLoader();

        loader.load(textura,
            function(texture) {
                material = new THREE.MeshBasicMaterial({
                    map: texture
                });
                mesh = new THREE.Mesh(geo, material);
                mesh.name = parameters.name;

                container.add(mesh);
                //   alert(" bafore return mesh,  Material looks ok \n\n"+mesh.material); 
            });
    }
    if (parameters.material != undefined) {
        material = parameters.material;

        mesh = new THREE.Mesh(geo, material);
        container.add(mesh); //alert(mesh);
        mesh.name = parameters.name;

    }

}


function esfera(parameters) {
    var container = null;
    var geo;

    var mesh;
    var r = 1;
    var sh = 10;
    var sv = 10;
    var buffer = false;
    var material = null;
    var textura = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrzfNmlas9LW_v3P7uUomsyklfGTuJCKpvcnXGfGy3axhOQSC';
    if (parameters.r != undefined) r = parameters.r;
    if (parameters.sh != undefined) sh = parameters.sh;
    if (parameters.sv != undefined) sv = parameters.sv;
    if (parameters.buffer != undefined) buffer = parameters.buffer;
    if (parameters.textura != undefined) textura = parameters.textura;
    if (buffer) geo = new THREE.SphereBufferGeometry(r, sh, sv);

    else {
        geo = new THREE.SphereGeometry(r, sh, sv); //alert("no bug esf");
    }

    if (parameters.container != undefined) container = parameters.container;
    else {
        geo.name = parameters.name;
        return geo;
    }

    if (parameters.textura == undefined && parameters.material == undefined) {

        material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geo, material);
        mesh.name = parameters.name;

        container.add(mesh);

    }

    if (parameters.textura != undefined && material == undefined) {
        // container.add(mesh);
        var loader = new THREE.TextureLoader();
        loader.load(textura,
            function(texture) {
                material = new THREE.MeshBasicMaterial({
                    map: texture
                });
                mesh = new THREE.Mesh(geo, material);

                mesh.name = parameters.name;

                mesh.scale.x = -1;
                container.add(mesh);
            });
    }
    if (parameters.material != undefined) {
        material = parameters.material;

        mesh = new THREE.Mesh(geo, material);
        mesh.name = parameters.name;

        container.add(mesh);
    }


}

function gbox(x, y, z, center, buffer) {
    var geo;
    if (buffer) geo = new THREE.BoxBufferGeometry(x, y, z);
    else geo = new THREE.BoxGeometry(x, y, z);
    if (!center) {
        geo.translate(x / 2, y / 2, z / 2);
        return geo
    } else return geo;
}

function gsphere(r, sh, sv, center, buffer) {
    //  var geo=new THREE.Geometry();
    var geo = new THREE.SphereGeometry(r, sh, sv);
    if (buffer) geo = new THREE.SphereBufferGeometry(r, sh, sv);
    //  else geo = new THREE.SphereGeometry(r, sh, sv);
    if (!center) geo.translate(r, r, r);
    return geo;
}

function gcylinder(r1, r2, h, sh, sv, center, buffer) {

    if (buffer) {
        var gcyl = new THREE.CylinderBufferGeometry(r1, r2, h, sh, sv);
        if (!center) gcyl.translate(r1, h / 2, r1);
        return gcyl
    } else {
        var gcyl = new THREE.CylinderGeometry(r1, r2, h, sh, sv);
        if (!center) {
            gcyl.translate(r1, h / 2, r1);
        }
        return gcyl
    }
}


function mesh(geo, mat) {
    var me = new THREE.Mesh(geo, mat);
    me.castShadow = true; //default is false
    me.receiveShadow = true; //default
    return me;
}

function vector(x, y, z) {
    return new THREE.Vector3(x, y, z);
}

/*function sphere(r, sh, sv, material, texture, buffer) {
    var geo, mat;
    if (material == null) mat = new THREE.MeshNormalMaterial()
    else mat = material;
    if (buffer) geo = new THREE.SphereBufferGeometry(r, sh, sv);
    else geo = new THREE.SphereGeometry(r, sh, sv);
    var mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial());
    if (texture != null) {
        var l = new THREE.TextureLoader().load(
            texture,
            function(texture) {
                mesh.material.map = texture;
                mesh.material.needsUpdate = true;
                //  alert("updated");
            });

    }
    return mesh;



}
*/


function material(texture, color) {
    var mat = new THREE.MeshPhongMaterial();

    if (color != undefined) mat.color = new THREE.Color(color);
    if (texture != undefined && texture != "" && texture != null) mat.map = new THREE.TextureLoader().load(texture);

    mat.side = THREE.DoubleSide;
    //  mat.depthWrite = false;
    mat.transparent = true;
    return mat;

}

function gplane(x, y, center, buffer) {
    if (buffer) {
        var g = new THREE.PlaneBufferGeometry(x, y);
        if (!center) g.translate(x2, y / 2, 0);
        return g;
    } else {
        var g = new THREE.PlaneGeometry(x, y);
        if (!center) g.translate(x / 2, y / 2, 0);
        return g;
    }

}

function gettexture(textura) {
    var loader = new THREE.TextureLoader();
    loader.load(textura);
    return loader;
}

function settexture(mat, textura) {
    var loader = new THREE.TextureLoader();
    loader.load(textura, function(texture) {
        mat.map = texture
    });

}

function box(x, y, z, texture, color, center) {
    try {

        //  if(texture==undefined || texture==null || texture=="") color=0x00aa00;
        return mesh(gbox(x, y, z, center, false), material(texture, color));
    } catch (er) {
        alert(er);
    }

}

function sphere(radius, sh, sv, texture, color, center) {
    try {
        var m = mesh(gsphere(radius, sh, sv, center, false), material(texture, color));
        //  if(!center || center!=undefined) m.transtate(radius,radius,radius);
        return m;
    } catch (er) {
        alert(er);
    }
}

function cylinder(radius1, radius2, h, sh, sv, texture, color, center) {
    try {
        return mesh(gcylinder(radius1, radius2, h, sh, sv, center, false), material(texture, color));
    } catch (er) {
        alert(er);
    }
}

function plane(x, y, texture, color, center) {
    try {
        var ms = material(texture, color);
        ms.side = THREE.DoubleSide;
        return mesh(gplane(x, y, center, center), ms);
    } catch (er) {
        alert(er);
    }
}
/**/

function structural() {
    this.gGusset=function (w,h,tk){
var shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(w,h);
  shape.lineTo(w,0);
const extrudeSettings = {amount:tk, bevelEnabled: false};
return new THREE.ExtrudeGeometry( shape, extrudeSettings );
}
this.gShape=function (points,h){
 
    var shape = new THREE.Shape(points);
 
    const extrudeSettings = {amount:h, bevelEnabled: false};
    return new THREE.ExtrudeGeometry( shape, extrudeSettings );
   
}
   this.Shape=function (points,h,texture,color){
            if(texture!="") return new THREE.Mesh(this.gShape(points,h),new THREE.MeshPhongMaterial({opacity:.5,color:color,map:new THREE.ImageUtils.loadTexture( texture )}));
        return new THREE.Mesh(this.gShape(points,h),new THREE.MeshPhongMaterial({opacity:.5,color:color}));
        }  

    this.gflat = function(w, l, tk, center, buffer) {
        return gbox(l, tk, w, center, buffer);
    }
    this.gplate = function(w, l, tk, center, buffer) {
        return gbox(l, tk, w, center, buffer);
    }

    this.gangle = function(w1, w2, l, tk, center, buffer) {

        var bm = gbox(l, tk, w1, false, buffer);
        var bc = gbox(l, w2 - tk, tk, false, buffer);
        bc.translate(0, tk, 0);
        bc.merge(bm);
        if (center) bc.translate(-l / 2, -w2 / 2, -w1 / 2);


        return bc;

    }
    this.gangle2 = function(l1, l2, lo, tk, center, buffer) {

        var bm = gbox(lo, l1, l2, center, buffer);
        var bc = bm.clone();
        bc.translate(0, tk, -tk);
        var an = gsubtract(bm, bc);
        return an;

    }
    this.gplateedged = function(w, l, tk, radius, center, cdf, buffer) {
        if (cdf === undefined) cdf = 30;
        var boxx = gbox(l, tk, w - radius * 2).translate(0, 0, radius);
        var boxy = gbox(l - radius * 2, tk, w).translate(radius, 0, 0);
        var co1 = gcylinder(radius, radius, tk, cdf, cdf, false, false);
        var co2 = co1.clone().translate(l - radius * 2, 0, 0);
        var co3 = co1.clone().translate(l - radius * 2, 0, w - radius * 2);
        var co4 = co1.clone().translate(0, 0, w - radius * 2);
        boxx = gunion(boxx, boxy);
        boxx = gunion(boxx, co1);
        boxx = gunion(boxx, co2);
        boxx = gunion(boxx, co3);
        boxx = gunion(boxx, co4);
        if (center) boxx.translate(-l / 2, -tk / 2, -w / 2);
        return boxx;
    }
    this.gtube = function(D, l, tk, center, cdf, buffer) {
        if (cdf === undefined) cdf = 30;
        var co = gcylinder(D / 2, D / 2, l, cdf, cdf, true, false);
        var ci = gcylinder(D / 2 - tk, D / 2 - tk, l, cdf, cdf, true, false);
        var tu = gsubtract(co, ci);
        ////
        tu.rotateZ(Math.PI / 2); /////

        if (!center) tu.translate(l / 2, D / 2, D / 2); ////  
        //   if(!center) tu.translate(D/2,l/2,D/2);
        return tu;

    }
    this.gpipe = function(D, l, tk, center, cdf, buffer) {
        if (cdf === undefined) cdf = 30;
        var ci = gcylinder(D / 2, D / 2, l, cdf, cdf, true, false);
        var co = gcylinder(D / 2 + tk, D / 2 + tk, l, cdf, cdf, true, false);
        var tu = gsubtract(co, ci);
        tu.rotateZ(Math.PI / 2); /////

        if (!center) tu.translate(l / 2, D / 2, D / 2); ////      
        //    if(!center) tu.translate(D/2,l/2,D/2);
        return tu;

    }

    this.gchannel = function(w, l, h, tk, center, buffer) {
        var l1 = gbox(l, h, w, false, buffer);
        var l2 = gbox(l, h, w - tk * 2, false, buffer);
        l2.translate(0, tk, tk);

        var ch = gsubtract(l1, l2);
        if (center) ch.translate(-l / 2, -h / 2, -w / 2);
        return ch;

    }

    this.ghbeam = function(w, l, h, tk, center, buffer) {

        var l1 = gbox(l, h - 2 * tk, tk, true, buffer);
        //    l1.translate(0,tk,w/2-tk);
        var lt = gbox(l, tk, w, true, buffer);
        var lb = lt.clone();
        lt.translate(0, h / 2 + tk / 2, 0);
        lb.translate(0, -h / 2 + tk / 2, 0);
        var ch = new THREE.Geometry();
        ch.merge(lt);
        ch.merge(l1);
        ch.merge(lb)

        if (!center) ch.translate(l / 2, h / 2, w / 2);
        return ch;

    }
    this.gbar = function(D, l, center, cdf, buffer) {
        if (cdf === undefined) cdf = 30;

        var ba = gcylinder(D / 2, D / 2, l, cdf, cdf, true, buffer);
        ba.rotateZ(Math.PI / 2);
        if (!center) ba.translate(l / 2, D / 2, D / 2);

        return ba

    }

    this.gsquaretubing = function(w, h, l, tk, center, buffer) {
        var l1 = gbox(l, h, w, center, buffer);
        var l2 = gbox(l, h - tk * 2, w - tk * 2, center, buffer);
        l2.translate(0, tk, tk);

        var ch = gsubtract(l1, l2);
        // if(!center) tu.translate(D/2,l/2,D/2);
        return ch;

    }

    this.gsquaretubingedged = function(l, w, h, tk, rad, center, cdf, buffer) {
        if (cdf === undefined) cdf = 30;
        var l1 = this.gplateedged(h, w, l, rad, true, cdf, buffer) //.rotateZ(Math.PI/2);
        var l2 = this.gplateedged(h - 2 * tk, w - 2 * tk, l, rad - tk, true, cdf, buffer) //.rotateZ(Math.PI/2);;
        //  l2.translate(-tk,0,-tk);

        var ch = gsubtract(l1, l2);
        ch.rotateZ(Math.PI / 2);

        if (!center) ch.translate(l / 2, w / 2, h / 2);

        //    if(!center)ch.translate(w/2,l/2,h/2);;
        return ch;

    }
    ///////////////

    this.flat = function(w, l, tk, texture, color, center, buffer) {
        return mesh(this.gflat(w, l, tk, center, buffer), material(texture, color));
    }
    this.plate = function(w, l, tk, texture, color, center, buffer) {
        return mesh(this.gplate(w, l, tk, center, buffer), material(texture, color));
    }

    this.anglee = function(w, l, tk, texture, color, center, buffer) {

        return mesh(this.gangle(w, l, tk, center, buffer), material(texture, color));

    }
    this.angle = function(l1, l2, lo, tk, texture, color, center, buffer) {

        return mesh(this.gangle(l1, l2, lo, tk, center, buffer), material(texture, color));

    }
    this.plateedged = function(w, l, tk, radius, texture, color, center, cdf, buffer) {

        return mesh(this.gplateedged(w, l, tk, radius, center, cdf, buffer), material(texture, color));
    }
    this.tube = function(D, l, tk, texture, color, center, cdf, buffer) {
        //alert(color)
        return mesh(this.gtube(D, l, tk, center, cdf, buffer), material(texture, color));

    }
    this.pipe = function(D, l, tk, texture, color, center, cdf, buffer) {

        return mesh(this.gpipe(D, l, tk, center, cdf, buffer), material(texture, color));

    }

    this.channel = function(w, l, h, tk, texture, color, center, buffer) {

        return mesh(this.gchannel(w, l, h, tk, center, buffer), material(texture, color));

    }

    this.hbeam = function(w, l, h, tk, texture, color, center, buffer) {

        return mesh(this.ghbeam(w, l, h, tk, center, buffer), material(texture, color));
    }
    this.bar = function(D, l, texture, color, center, cdf, buffer) {
        //  return gcylinder(D/2,D/2,l,30,30,center,buffer);
        return mesh(this.gbar(D, l, center, cdf, buffer), material(texture, color));
    }

    this.squaretubing = function(w, h, l, tk, texture, color, center, buffer) {

        return mesh(this.gsquaretubing(w, h, l, tk, center, buffer), material(texture, color));

    }

    this.squaretubingedged = function(l, w, h, tk, rad, texture, color, center, cdf, buffer) {
        return mesh(this.gsquaretubingedged(l, w, h, tk, rad, center, cdf, buffer), material(texture, color));

    }
    ////////////////
}
function cutG(from,ob){
    var ob1 = from,
        ob2 = ob,
        geom = from;
    if (from.isGeometry) ob1 = from;
    if (from.isBufferGeometry) ob1 = new THREE.Geometry().fromBufferGeometry(fromob);
    if (ob.isGeometry) ob2 = ob;
    if (ob.isBufferGeometry) ob2 = new THREE.Geometry().fromBufferGeometry(ob); 
     var ob1_bsp = new ThreeBSP(from);
    var ob2_bsp = new ThreeBSP(ob);
     var subtract_bsp = ob1_bsp.subtract(ob2_bsp);
    var geom = subtract_bsp.toGeometry();
    geom.computeVertexNormals();
   var  verts = geom.vertices;
    for (let i = 0; i < verts.length; i++){	verts[i].setX(verts[i].x * -1);}
    geom.verticesNeedUpdate = true;   
       return geom;
}
function cutM(fromM, M){
    var a=new THREE.Geometry(),b=new THREE.Geometry()
      a=fromM.geometry.clone()
      b=M.geometry.clone();
    a.rotateX(fromM.rotation.x);a.rotateY(fromM.rotation.y);a.rotateZ(fromM.rotation.z);
    a.translate(fromM.position.x,fromM.position.y,fromM.position.z);
    b.rotateX(M.rotation.x);b.rotateY(M.rotation.y);b.rotateZ(M.rotation.z);
    b.translate(M.position.x,M.position.y,M.position.z);
    fromM.geometry=gsubtract(a,b)
 }
function cutMesh(from, ob) {
    if (from.isMesh && ob.isMesh) {
         var g1 = from.geometry;
        var g2 = ob.geometry;
        g1.rotateX(from.rotation.x);
        g1.rotateY(from.rotation.y);
        g1.rotateZ(from.rotation.z);
        g1.translate(from.position.x, from.position.y, from.position.z);
        g2.rotateX(ob.rotation.x);
        g2.rotateY(ob.rotation.y);
        g2.rotateZ(ob.rotation.z);
        g2.translate(ob.position.x, ob.position.y, ob.position.z);

        var ng = subtract({
            fromob: g1,
            ob: g2
        });

        var nob = mesh(ng, from.material);
        nob.rotation.set(from.rotation.x, from.rotation.y, from.rotation.z);
        return nob;
    } else alert("Is not a Mesh");


}

function group() {
    return new THREE.Group();
}

function geometry() {
    return new THREE.Geometry();
}

function chkfont(elem, body) {
    var body = document.getElementsByTagName('body')[0];
    var dummy = document.createElement('div');

    var dummyText = document.createTextNode('M');
    dummy.appendChild(dummyText);
    fontStyle = eedi.style.fontStyle;
    dummy.setAttribute('style', fontStyle + ';position:absolute;top:0;left:0');
    body.appendChild(dummy);

    result = dummy.offsetHeight;
    alert(result);

    body.removeChild(dummy);
}

function t_extura(pic) {
    return new THREE.TextureLoader().load(pic);
}

function line(points, width, color) {
    var lin = new THREE.Geometry();
    lin.vertices = points;
    var mat = new THREE.LineBasicMaterial({
        color: color,
        linewidth: width
    });
    var linea = new THREE.Line(lin, mat);
    linea.castShadow = true;
    return linea;

}


function LJL() {
   this.tmetal="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT413jDECPcWpExKfDvY4QqegtPfXIYelonQEJspu8ZNyvi1_--74DdoMmGUOPw6DOcRes&usqp=CAU"
   //  this.tmetal="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTTB-NXkpu7X_SV42LBbdS5npnlL94PiVEJjEdUsYChvvfc34jIoMTmKHnJFRw7kcEGk&usqp=CAU"
this.downloadFile= function(filename, text){

 if(filename.indexOf(".")==-1) filename+=".txt";
  var e=filename.split(".")==-1;
 
//  let file = new Blob(["<html>…</html>"], {type: 'text/html'});
  let file = new Blob([text], {type: 'text/'+e[1]});

 let fileRoute = window.URL.createObjectURL(file);
  let a = document.createElement('a');
  a.setAttribute('href', fileRoute);
  a.setAttribute('download', filename);
  document.body.appendChild(a);  a.click();
  document.body.removeChild(a); 
 
}
 
 
    this.arlebs = [];
  this.arrayToV2 = function(ar){
        var arv=[];
        for(var i=0;i<ar.length;i++){
        arv.push({x:ar[i][0],y:ar[i][1],id:ar[i][2],name:ar[i][3]});
        }
        return arv;
        }
        this.arrayToV3 = function(ar){
        var arv=[];
        for(var i=0;i<ar.length;i++){
        
        arv.push({x:ar[i][0],y:ar[i][1],z:ar[i][2],id:ar[i][3],name:ar[i][4]});
        }
        return arv;
        }

    this.material = function(texture, color) {
         var mat = new THREE.MeshPhongMaterial();
        if (color != undefined) mat.color = new THREE.Color(color);
      //  alert(tmetal)
        if (texture != undefined && texture != "" && texture != null) mat.map = new THREE.TextureLoader().load(texture);
       mat.side = THREE.DoubleSide;
         mat.transparent = true;
        return mat;

    }

    this.gplane = function(x, y, center, buffer) {
        if (buffer) {
            var g = new THREE.PlaneBufferGeometry(x, y);
            if (!center) g.translate(x2, y / 2, 0);
            return g;
        } else {
            var g = new THREE.PlaneGeometry(x, y);
            if (!center) g.translate(x / 2, y / 2, 0);
            return g;
        }

    }




    this.gbox = function(x, y, z, center, buffer) {
        var geo;
        if (buffer) geo = new THREE.BoxBufferGeometry(x, y, z);
        else geo = new THREE.BoxGeometry(x, y, z);
        if (!center) {
            geo.translate(x / 2, y / 2, z / 2);
            return geo
        } else return geo;
    }

    this.gsphere = function(r, sh, sv, center, buffer) {
        //  var geo=new THREE.Geometry();
        var geo = new THREE.SphereGeometry(r, sh, sv);
        if (buffer) geo = new THREE.SphereBufferGeometry(r, sh, sv);
        //  else geo = new THREE.SphereGeometry(r, sh, sv);
        if (!center) geo.translate(r, r, r);
        return geo;
    }

    this.gcylinder = function(r1, r2, h, sh, sv, center, buffer) {

        if (buffer) {
            var gcyl = new THREE.CylinderBufferGeometry(r1, r2, h, sh, sv);
            if (!center) gcyl.translate(r1, h / 2, r1);
            return gcyl
        } else {
            var gcyl = new THREE.CylinderGeometry(r1, r2, h, sh, sv);
            if (!center) {
                gcyl.translate(r1, h / 2, r1);
            }
            return gcyl
        }
    }


    this.mesh = function(geo, mat) {
        var me = new THREE.Mesh(geo, mat);
        me.castShadow = true; //default is false
        me.receiveShadow = true; //default
        return me;
    }

    this.vector = function(x, y, z) {
        return new THREE.Vector3(x, y, z);
    }
    this.box = function(x, y, z, texture, color, center) {
        try {

            //  if(texture==undefined || texture==null || texture=="") color=0x00aa00;
            return this.mesh(this.gbox(x, y, z, center, false), this.material(texture, color));
        } catch (er) {
            alert(er);
        }

    }

    this.sphere = function(radius, sh, sv, texture, color, center) {
        try {
            var m = this.mesh(this.gsphere(radius, sh, sv, center, false), this.material(texture, color));
            //  if(!center || center!=undefined) m.transtate(radius,radius,radius);
            return m;
        } catch (er) {
            alert(er);
        }
    }

    this.cylinder = function(radius1, radius2, h, sh, sv, texture, color, center) {
        try {
            return this.mesh(this.gcylinder(radius1, radius2, h, sh, sv, center, false), this.material(texture, color));
        } catch (er) {
            alert(er);
        }
    }

    this.plane = function(x, y, texture, color, center) {
        try {
            var ms = this.material(texture, color);
            ms.side = THREE.DoubleSide;
            return this.mesh(this.gplane(x, y, center, center), ms);
        } catch (er) {
            alert(er);
        }
    }

    this.point = function(x, y, z) {
        return new THREE.Vector3(x, y, z);
    }

    this.line = function(points, width, color) {
        var lin = new THREE.Geometry();
        lin.vertices = points;
        var mat = new THREE.LineBasicMaterial({
            color: color,
            linewidth: width
        });
        var linea = new THREE.Line(lin, mat);
        linea.castShadow = true;
        return linea;

    }
    this.lineSegments = function(points, width, color) {
        var lin = new THREE.Geometry();
        lin.vertices = points;
        var mat = new THREE.LineBasicMaterial({
            color: color,
            linewidth: width
        });
        var linea = new THREE.LineSegments(lin, mat);
        linea.castShadow = true;
        return linea;

    }
    this.dashedLine = function(points, width, color, size, gap) {
        var lin = new THREE.Geometry();
        lin.vertices = points;
        var mat = new THREE.LineDashedMaterial({
            color: color,
            dashSize: size,
            gapSize: gap,
            linewidth: width
        })

        var linea = new THREE.Line(lin, mat);
        linea.castShadow = true;
        return linea;
    }

this.tag=function(params){
    var tx=params.msg;
    var arl=tx.split("\n");
    var font=params.font;
    var color=params.color;
var m=4;
    if(color===undefined)color="white"
    var c = document.createElement("canvas"); //alert(renderer.getPixelRatio ()) \
    var ctx = c.getContext("2d"); 
    if(font===undefined){font = '150px serif'}
      ctx.font=font;
    var z= ctx.measureText(tx);
   var hh=z.actualBoundingBoxAscent+2*m
     var h=hh*arl.length;
var t=0;
for(var i=0;i<arl.length;i++){
    var zz= ctx.measureText(arl[i]);
if(t<zz.width)t=zz.width;
 }
c.width=t+c.width*.12;c.height+=h+c.height*.12;//c.height+=c.height*.12;
var bk="rgba(0,0,0,0)"
if(params.background!=undefined){ 
    bk=params.background;
        ctx.fillStyle = bk;
     ctx.fillRect(c.width / 2-t/2-m,c.height/2-h/2,t+m*2,h+m*3);
     ctx.fillStyle = "white";//color;
     ctx.strokeStyle = ctx.fillStyle;
     ctx.lineWidth = 2;
     ctx.strokeRect(c.width / 2-t/2-m,c.height/2-h/2,t+m*2,h+m*3);
}
if(params.border!=undefined){
 ctx.fillStyle = params.border;//"white";//color;
 ctx.strokeStyle = ctx.fillStyle;
 ctx.lineWidth = 2;
  ctx.strokeRect(c.width / 2-t/2-m,c.height/2-h/2,t+m*2,h+m*3);
}
 for(var i=0;i<arl.length;i++){
    ctx.font = font;
    var x = c.width / 2;
    ctx.textAlign = "center";
    ctx.fillStyle = color;
     ctx.fillText(arl[i], x,  c.height/2-h/2+(hh+hh*i)); 
  }

 texture = new THREE.ImageUtils.loadTexture(c.toDataURL())
 
 const material = new THREE.SpriteMaterial({map: texture,color: 0xffffff});
const sprite = new THREE.Sprite(material);
return sprite;

}

 
this.tagTexture=function(params){
    var tx=params.msg;
    var arl=tx.split("\n");
    var font=params.font;
    var color=params.color;
var m=4;
    if(color===undefined)color="white"
    var c = document.createElement("canvas"); //alert(renderer.getPixelRatio ()) \
    var ctx = c.getContext("2d"); 
    if(font===undefined){font = '150px serif'}
      ctx.font=font;
    var z= ctx.measureText(tx);
   var hh=z.actualBoundingBoxAscent+2*m
     var h=hh*arl.length;
var t=0;
for(var i=0;i<arl.length;i++){
    var zz= ctx.measureText(arl[i]);
if(t<zz.width)t=zz.width;
 }
c.width=t+c.width*.12;c.height+=h+c.height*.12;//c.height+=c.height*.12;
var bk="rgba(0,0,0,0)"
if(params.background!=undefined){ 
    bk=params.background;
        ctx.fillStyle = bk;
     ctx.fillRect(c.width / 2-t/2-m,c.height/2-h/2,t+m*2,h+m*3);
     ctx.fillStyle = "white";//color;
     ctx.strokeStyle = ctx.fillStyle;
     ctx.lineWidth = 2;
     ctx.strokeRect(c.width / 2-t/2-m,c.height/2-h/2,t+m*2,h+m*3);
}
if(params.border!=undefined){
 ctx.fillStyle = params.border;//"white";//color;
 ctx.strokeStyle = ctx.fillStyle;
 ctx.lineWidth = 2;
  ctx.strokeRect(c.width / 2-t/2-m,c.height/2-h/2,t+m*2,h+m*3);
}
 for(var i=0;i<arl.length;i++){
    ctx.font = font;
    var x = c.width / 2;
    ctx.textAlign = "center";
    ctx.fillStyle = color;
     ctx.fillText(arl[i], x,  c.height/2-h/2+(hh+hh*i)); 
  }
var rpx=1, rpy=1;
if(params.repeatX!=undefined) rpx=params.repeatX;
if(params.repeatY!=undefined) rpy=params.repeatY;
 texture = new THREE.ImageUtils.loadTexture(c.toDataURL())

 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set(rpx,rpy);
 
 return texture;

}
 
this.TextOnCanvas = function (Canvas, text, font, color, bkgcolor, marginTop, maxWidth, lineHeight, canvasops){
var canvas;
if(Canvas===null){
 canvas=document.createElement("canvas");
if(canvasops!=undefined){
canvas.width=canvasops.width;
canvas.height=canvasops.height;
if(canvas.style.background!=undefined) canvas.style.background=canvasops.background;
}
else{
canvas.width=maxWidth-10;
canvas.height=lineHeight*10;
}
}
else canvas=Canvas;
canvas.style.background=bkgcolor;
var x=(canvas.width - maxWidth) / 2, y=marginTop;
context=canvas.getContext('2d');
context.font = font;//'15pt script';//'15pt Calibri';
context.fillStyle = color;// '#333';
    var paragraphs = text.split('\n');
     for (var i = 0; i < paragraphs.length; i++) { 
  var line = '';
        var words = paragraphs[i].split(' ');
        for (var n = 0; n < words.length; n++) { // alert(words[n])
          
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (words[n].indexOf('\n') > -1 || testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        context.fillText(line, x, y); y += lineHeight;
    }
if(Canvas==null){ return canvas;}

}
 
  this.TextOnCanvasDoc = function(text, font, color, bkgcolor, marginTop, marginWidth, lineHeight, canvasops) {
    var r = 11 / 8.5;
    var pages = [];
 

    var canvas = document.createElement("canvas");
      canvas.width = 600;
       canvas.height = canvas.width * r;
     if(canvasops!=undefined){
   if(canvasops.width!=undefined) canvas.width=canvasops.width;
    if(canvasops.height!=undefined) canvas.height=canvasops.height;
       }
      canvas.style.background = bkgcolor;
    var x = marginWidth,
        y = marginTop,maxWidth=canvas.width-2*marginWidth;
 
    context = canvas.getContext('2d');
    context.fillStyle = bkgcolor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = font;
    context.fillStyle = color;
    pages.push(canvas);
    var paragraphs = text.split('\n');
    for (var i = 0; i < paragraphs.length; i++) {
        var line = '';
        var words = paragraphs[i].split(' ');
        for (var n = 0; n < words.length; n++) {
            if (y + lineHeight > canvas.height) {

                canvasnx = document.createElement("canvas");
                canvasnx.width = canvas.width;
                canvasnx.height = canvas.height;

                canvasnx.style.background = bkgcolor;
                var x = marginWidth,
                    y = marginTop;
                context = canvasnx.getContext('2d');
                context.fillStyle = bkgcolor;
                context.fillRect(0, 0, canvasnx.width, canvasnx.height);
                context.font = font;
                context.fillStyle = color;
                pages.push(canvasnx);

            }
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (words[n].indexOf('\n') > -1 || testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        y += lineHeight;
    }
    return pages;


}
 
 this.getMaterials=function(){
     Materials = {
    refractiveM: function() {
        var Mat = new THREE.MeshPhongMaterial();
        Mat.envMap = Materials.refractiveTexture();
        return Mat;
    },
    reflectiveM: function()
    {
        var Mat = new THREE.MeshPhongMaterial();
        Mat.envMap = Materials.reflectiveTexture();
        return Mat;
    },
    reflectiveTexture: function() {
        var rtTexture = new THREE.WebGLRenderTargetCube(256, 256, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBFormat
        });
        rtTexture.fromEquirectangularTexture(renderer, scene.textura);
        rtTexture.mapping = THREE.CubeReflectionMapping;
        return rtTexture;
    },
    refractiveTexture: function() {
        var rtTexture = new THREE.WebGLRenderTargetCube(256, 256, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBFormat
        });
        rtTexture.fromEquirectangularTexture(renderer, scene.textura);
        rtTexture.mapping = THREE.CubeRefractionMapping;
        return rtTexture;
    }
}
return Materials;
 }

 
 this.Materials = {
    refractiveM: function() {
        var Mat = new THREE.MeshPhongMaterial();
        Mat.envMap = Materials.refractiveTexture();
        return Mat;
    },
    reflectiveM: function()
    {
        var Mat = new THREE.MeshPhongMaterial();
        Mat.envMap = Materials.reflectiveTexture();
        return Mat;
    },
    reflectiveTexture: function() {
        var rtTexture = new THREE.WebGLRenderTargetCube(256, 256, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBFormat
        });
        rtTexture.fromEquirectangularTexture(renderer, scene.textura);
        rtTexture.mapping = THREE.CubeReflectionMapping;
        return rtTexture;
    },
    refractiveTexture: function() {
        var rtTexture = new THREE.WebGLRenderTargetCube(256, 256, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBFormat
        });
        rtTexture.fromEquirectangularTexture(renderer, scene.textura);
        rtTexture.mapping = THREE.CubeRefractionMapping;
        return rtTexture;
    }
}

 
    this.textLebel = function(msg, W, H, center, color, toCamera, font, frame) {
        if (typeof msg === "string" || typeof msg === "number") {

            var pl = this.plane(W, H, "", 0xffffff, center);

            if (font === undefined) font = "150px Arial";
            else font = "150px " + font;
            var d = this.getTextDimentions(msg, font);
            var w = d.w,
                h = d.h; //alert(w+"\n\n"+h);
            var c = document.createElement("canvas"); //alert(renderer.getPixelRatio ())
            c.width = w + 30;
            c.height = h + 20;
            /////////
            var corar = "000000"
            corar = corar.split("");
            var col = Number(color * 1).toString(16);
            var co = col.split("");
            col = corar.splice(0, 6 - co.length);
            col = col.concat(co);
            var cc = col.toString();
            cc = "#" + cc.replace(/,/g, "");
            /////////

            var ctx = c.getContext("2d");
            ctx.font = font;
            ctx.fillStyle = cc; //"#" + color.toString(16);
            if (frame) {
                ctx.strokeStyle = ctx.fillStyle;
                ctx.lineWidth = 10;
                ctx.strokeRect(0, 0, c.width, c.height);
            }

            ctx.textAlign = "center";
            ctx.fillText(msg, c.width / 2, c.height / 1.2);
            /////

            var tx = new THREE.CanvasTexture(c);
            pl.material.map = tx;

            pl.renderOrder = 2;
            if (toCamera === undefined) toCamera = true;
            pl.toCamera = toCamera
            this.arlebs.push(pl);
            return pl;
        }
    }

    this.getTextDimentions = function(txt, font) {
        this.font = font;
        if (this.font === undefined) this.font = "150px Arial";
        this.element = document.createElement('canvas');
        this.context = this.element.getContext("2d");
        this.context.font = font; //alert( parseInt(this.font));
        var result = {
            w: this.context.measureText(txt).width * 1,
            h: parseInt(this.font) * 1
        }
        return result;
    }

    this.getTextDimentions2 = function(font) {

        var elem = document.getElementsByTagName('body')[0];
        var tryText = document.createElement('p');
        tryText.style.fontSize = font;
        tryText.innerHTML = "M";

        elem.appendChild(tryText);
        result = tryText.offsetHeight
        elem.removeChild(tryText);
        return result;

    }
    this.toRadians = function(ang) {
        return ang * Math.PI / 180;

    }
    this.toDeg = function(ang) {
        return ang * 180 / Math.PI;

    }

    this.chromeMaterial = function(cubeCam, color) {
        if (color === undefined) color = 0xffffff;
        var chromeMt = new THREE.MeshPhongMaterial({
            color: color,
            roughness: 1,
            metalness: 0,
            alpha:true,
            envMap: cubeCam.renderTarget.texture
        });



        return chromeMt
    }
    this.gText = function(txt, urlFont, parameters, callback) {


        var loader = new THREE.FontLoader();

        loader.load(urlFont, function(font) {

            if (parameters === undefined || parameters === "" || parameters === null) {
                parameters = {

                    size: 100,
                    height: 20,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 35,
                    bevelSize: 8,
                    bevelSegments: 5
                }
                parameters.font = font;
            }
            parameters.font = font;


            var geometry = new THREE.TextGeometry(txt, parameters);
            callback(geometry);
            //    return gText;
        });


    }
    this.Texto = function(txt, urlFont, mat, parameters, callback) {
        var m = mesh();
        //     var g=new THREE.TextGeometry();

        this.gText(txt, urlFont, parameters, function(geo) {
            if (mat === undefined) mat = material("", 0xbbbbbb);
            var m = mesh(geo, mat);
            callback(m);
        })

        return m
    }

    this.loadScript = function(url, callback) {

        var s = document.createElement('script');
        s.type = 'text/javascript';
        var code = loadDoc(url);
        try {
            s.appendChild(document.createTextNode(code));
            document.body.appendChild(s); //
            callback();
        } catch (e) {
            s.text = code;
            document.body.appendChild(s);
            callback();
        }
    }



    this.loadScript = function(url, callback) {

        var s = document.createElement('script');
        s.type = 'text/javascript';
        var code = loadDoc(url);
        try {
            s.appendChild(document.createTextNode(code));
            document.body.appendChild(s); //
            callback();
        } catch (e) {
            s.text = code;
            document.body.appendChild(s);
            callback();
        }
    }

    this.loadDoc = function(url) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();
        calback();
        return xhttp.responseText;
    }

    this.takeScreenshotPC = function(rebderer, scene, camera, callback) {
        var w = window.open('', '');
        w.document.title = "Download...";
        //w.document.body.style.backgroundColor = "red";
        var img = new Image();
        // Without 'preserveDrawingBuffer' set to true, we must render now
        renderer.render(scene, camera);
        img.src = renderer.domElement.toDataURL();
        w.document.body.appendChild(img);
        calback();
    }
    
//to be used with DroidScript
 this.DS=new Object();
 this.DS.downloadImg=function (folder, filename,canva) {
         
            canva.toBlob(function(blob) {
                newImg = document.createElement('img'),
                url = URL.createObjectURL(blob);
                newImg.onload = function() {
                    // no longer need to read the blob so it's revoked
                    URL.revokeObjectURL(url);
                };
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false); /// synchronious 
            xhr.overrideMimeType('text/plain; charset=x-user-defined'); ///retrieve data unprocessed as a binary string
            xhr.send(null);
            var resp = xhr.response;
            var buf = []; /// array of char codes
            for (var i = 0, strLen = resp.length; i < strLen; i++) {
                buf[i] = resp.charCodeAt(i);
            }
            var file = app.CreateFile(folder + filename, "rw");
            file.WriteData(buf, "Int");
            file.Close();
            app.Vibrate("200,200");
            app.ShowPopup("File Saved At: "+folder+filename);
            })     
        }  
this.Mat={
   // pii: Math.PI,
    toRad(a) {
        return a * Math.PI / 180
    },
    toDeg(a) {
        return 180 * a / Math.PI
    },
    getObsG(p1, p2) {
        var dx = p2.x - p1.x,
            dy = p2.y - p1.y,
            dz = p2.z - p1.z;


        var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        var v = Math.asin(dy / d); //arcsin (dz / d);
        var az = Math.atan(dx / dz); //arctan((x2 –x1)/(y2 –y1));
        var c = 1;
        if (dx >= 0 && dz >= 0) c = 2;
        if (dx >= 0 && dz <= 0) c = 1;
        if (dx <= 0 && dz <= 0) c = 4;
        if (dx <= 0 && dz >= 0) c = 3

        return {
            az: this.radToAz(az, c),
            v: this.toDeg(v),
            d: d,
            dx: Math.cos(dy / d),
            dy: dy
        }
    },
    getObs(p1, p2) {
        var dx = p2.x - p1.x,
            dy = p2.y - p1.y,
            dz = p2.z - p1.z;


        var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        var v = Math.asin(dz / d); //arcsin (dz / d);
        var az = Math.atan(dx / dy); //arctan((x2 –x1)/(y2 –y1));
        var c = 1;
        if (dx >= 0 && dy >= 0) c = 1;
        if (dx >= 0 && dy <= 0) c = 2;
        if (dx <= 0 && dy <= 0) c = 3;
        if (dx <= 0 && dy >= 0) c = 4

        return {
            az: this.radToAz(az, c),
            v: this.toDeg(v),
            d: d,
            dx: Math.cos(dy / d),
            dz: dz
        }
    },

    radToAz(a, c) {

        var an = this.toDeg(a);
        if (an < 0) an = an * -1;
        if (c == 1) an = an;
        if (c == 2) an = 180 - an;
        if (c == 3) an = 180 + an;
        if (c == 4) an = 360 - an;
        return an;

    },
    degToAz(an, c) {
        if (an < 0) an = an * -1;
        if (c == 1) an = an;
        if (c == 2) an = 180 - an;
        if (c == 3) an = 180 + an;
        if (c == 4) an = 360 - an;
        return an;

    },

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
      var lat1 = this.toRad(lat1);
      var lat2 = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    },
getPosG(p,a,v,d){
 var pos={};
a=90-a;
v=this.toRad(v)
var dx=Math.cos(v)*d;
a=this.toRad(a);

pos.x=dx*Math.cos(a)+p.x;
pos.y=d*Math.sin(v)+p.y;
pos.z=dx*Math.sin(a)+p.z;
return pos;

},
fsObj(ob){
 var s=JSON.stringify(ob).replace(/"/g," ").replace(/:/g,": ").replace(/,/g,"\n").replace(/{/g,"\n").replace(/}/g,"\n");
    return s;
},
 interByDis(a,b,c){
 var x1=(a*a+c*c-b*b)/(2*c)
 var x2=c-x1;
 var ra=Math.acos(x1/a), A=this.toDeg(ra);
 var rc=Math.acos(x2/b), C=this.toDeg(rc);
 var rb=2*Math.PI-ra-rc;
 var B=180-A-C;
 return {A:A,B:B,C:C,ra:ra,rb:rb,rc:rc}
 }
 
}
 
    return this;
}






