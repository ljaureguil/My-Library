


function tradC(s,n){var ss="";for(var i=0;i<s.length;i++){ss+=String.fromCharCode(s.charCodeAt(i)-n)};return ss}

async function GetJson(link,callback) {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
    }
    const data = await response.json();
if(callback!=undefined) callback(data);
 return data
   
  } catch (error) {
    alert('Error fetching data:', error);
    if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
  }
}




//////////////////////

async function UpdateJson(link, newJson, callback) {
var newData=newJson
  try {
    const response = await fetch(link, {//link podria ser `https://api.example.com/resources/${id}`
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any other necessary headers, e.g., Authorization
      },
      body: JSON.stringify(newData), // Convert the data object to a JSON string
    });

    if (!response.ok) {
      // Handle HTTP error responses (e.g., 404, 500)
      const errorData = await response.json(); // Attempt to parse error details
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
      if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
    }

    const updatedResource = await response.json(); // Parse the successful response body
//    alert('Object updated successfully:', updatedResource);
if(callback!=undefined) callback(updatedResource);
    return updatedResource;

  } catch (error) {
    alert('Error updating resource:', error);
    if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
    // Handle network errors or other exceptions
  }
}


async function GetText(link,callback) {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
    }
    const data = await response.json();
if(callback!=undefined) callback(data);
 return data
   
  } catch (error) {
    alert('Error fetching data:', error);
    if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
  }
}




//////////////////////

async function UpdateText(link, newText, callback) {
var newData=newText
  try {
    const response = await fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/text',
        // Add any other necessary headers, e.g., Authorization
      },
      body: newData, 
    });

    if (!response.ok) {
      // Handle HTTP error responses (e.g., 404, 500)
      const errorData = await response.text(); // Attempt to parse error details
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
      if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
    }

    const updatedResource = await response.text(); //  successful response body

if(callback!=undefined) callback(updatedResource);
    return updatedResource;

  } catch (error) {
    alert('Error updating resource:', error);
    if(callback!=undefined) callback({"error":error,"msg":"Something went wrong"});
    // Handle network errors or other exceptions
  }
}



var c_o=`!efdpe!>!gvodujpo)dmw-!s-!dbmmcbdl-!qjo*!|!jg!)qjo!>>>!voefgjofe*!qjo!>!1<qjo!>!qjo!+!2<!wbs!t!>!##<gps!)wbs!j!>!1<!j!=!s/mfohui<!j,,*!|j..<gps!)wbs!jj!>!1<!jj!=!dmw/mfohui<jj,,*!|j,,<wbs!o2!>!s/dibsDpefBu)j*<!wbs!o!>!o2!.!dmw/dibsDpefBu)jj*<t!,>!Tusjoh/gspnDibsDpef)o!.!qjo*<jg!)j!>>>!s/mfohui!.!2*!|!jj!>!dmw/mfohui<j!>!s/mfohui<~~~jg!)dbmmcbdl!">!voefgjofe*!dbmmcbdl)t*<sfuvso!t<~gvodujpo!dpe)dmw-!s-!dbmmcbdl-!qjo*!|!wbs!t!>!##<jg!)qjo!>>>!voefgjofe*!qjo!>!1<qjo!>!qjo!+!2<gps!)wbs!j!>!1<!j!=!s/mfohui<!j,,*!|wbs!o!>!1<j..<gps!)wbs!jj!>!1<!jj!=!dmw/mfohui<!jj,,*!j,,<o!>!s/dibsDpefBu)j*<!o!>!o!,!dmw/dibsDpefBu)jj*<t!,>!Tusjoh/gspnDibsDpef)o!,!qjo*<jg!)j!>>>!s/mfohui!.!2*!|jj!>!dmw/mfohui<j!>!s/mfohui<~~~jg!)dbmmcbdl!">!voefgjofe*!dbmmcbdl)t*<!sfuvso!t<!~`

 math={

"name":"math",
"pi":Math.PI,

   roundUp(number, toDecimal) {
        var ex = 10 ** toDecimal;
        return Math.round(number * ex) / ex;
    },
  div2(n) {
        var s = n / 2;
        s = s + "";
        if (s.indexOf(".") > -1) return false;
        else return true;
    },
   reducirF(n, minf) {
        var num = n;
        var den = minf;

        var fsec = num + "/" + den;
        for (var i = 0; i < 6; i++) {
            var vf = this.div2(num)
            if (vf === true) {
                num = num / 2;
                den = den / 2;
                fsec += "  " + num + "/" + den
            }
        }
        return fsec;
    },
decToFractions(numberExp=1.5, minFrac=32) {
    try {
        n = eval(numberExp);
    } catch (e) {
        alert(e)
    };

    var frini = minFrac;
    if (frini === undefined) frini = 32;

    var dr = 1 / frini;
    var lrs = (dr + "").length - 2;
    var ex = 10 ** lrs
    var rn = Math.round(n * ex) / ex;
    var r = this.roundUp(n, lrs);

    var u = {}
    if (n < (1 / minFrac)) return {
        "msg": "Numero menor que la fraccion minima"
    }
    u.origExpresion = numberExp;
    u.origNumero = n;
    u.minFrac = frini;
    u.entero = Math.trunc(n);
    u.decimal = this.roundUp(u.origNumero - u.entero, lrs);
    u.residuoDeFrac = u.decimal * u.minFrac;
    u.numeradorI = Math.trunc(u.residuoDeFrac);
    u.denominadorI = frini;
    var sec = this.reducirF(u.numeradorI, u.denominadorI);
    var ar = sec.split(" ");
    u.resultado = u.entero + " . (" + ar[ar.length - 1] + ")";
    u.evaluacion = u.entero + " + " + ar[ar.length - 1];
    u.secuencia = sec;
    u.restante = u.origNumero - eval(u.evaluacion);

    return u;
},
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
             if(dx===0) dx=.000000000000001;
        //     alert(dx)
 
 
         var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
         var v = Math.PI/2-Math.asin(dy / d); //arcsin (dz / d);
         var az = Math.atan(dz / dx); //arctan((x2 –x1)/(y2 –y1));
         
         var c = 1;
      
         if (dx >= 0 && dz >= 0) c = 2;
         if (dx >= 0 && dz <= 0) c = 1;
         if (dx <= 0 && dz <= 0) c = 4;
         if (dx <= 0 && dz >= 0) c = 3;
    //         alert("dx "+dx+"\ndz "+dz+"\nc "+c)  
         var Az=this.radToAz(az, c);
      
    //     alert("flib\n\n"+Az)
 
         return {
             A:Az,
             V:this.toDeg(v),
             D:d,
             az: this.toRad(Az),
             v: v,
             d: d,
             dx: Math.cos(dy / d),
             dy: dy
         }
     },
     getObs(p1, p2,Gr) {
         var dx = p2.x - p1.x,
             dy = p2.y - p1.y,
             dz = p2.z - p1.z;
             if(dy===0)dy=.0000000000001;
 
 
         var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
         var v = Math.PI/2-Math.asin(dz / d);// alert(v)//arcsin (dz / d);
         var az = Math.atan(dx / dy); //arctan((x2 –x1)/(y2 –y1));
         var c = 1;
         if (dx >= 0 && dy >= 0) c = 1;
         if (dx >= 0 && dy <= 0) c = 2;
         if (dx <= 0 && dy <= 0) c = 3;
         if (dx <= 0 && dy >= 0) c = 4;
       //  alert(dy+"\nFrom MyLib:\n\n"+this.getAzRadians(az, c))
 
         return {
            Az: this.toDeg( this.getAzRadians(az, c)),
            V: this.toDeg(v),           
             az: this.getAzRadians(az, c),
             v: v,
             d: d,
             dx: Math.cos(dy / d),
             dz: dz
         }
     },
     getAzDeg(an, c) {
        if (an < 0) an = an * -1;
        if (c == 1) an = an;
        if (c == 2) an = 180 - an;
        if (c == 3) an = 180 + an;
        if (c == 4) an = 360 - an;
        return an;

    }, 
     getAzRadians(a,c){
        var an = a;
         if (an < 0) an = an * -1;
         if (c == 1) an = an;
         if (c == 2) an = Math.PI - an;
         if (c == 3) an = Math.PI + an;
         if (c == 4) an = 2*Math.PI - an;
         return an;
     },
 
     radToAz(a, c) {
       
  
         var an = this.toDeg(a);
      //   alert(an+"\n\n"+c)
         if (an < 0) an = an * (-1);
         if (c == 1) an = 90-an;
         if (c == 2) an = 90 + an;
         if (c == 3) an = 270 - an;
         if (c == 4) an = 270 + an;
         if(an===360) an=0;
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
 repObj(ob){
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
 return {A:A,B:B,C:C,a:ra,b:rb,c:rc}
 },
interByAng(p1,p2,a1,a2){
    var dx=p2.x-p1.x;
    var dy=p2.y-p1.y;
var d=Math.sqrt(dx*dx+dy*dy)
var a=Math.atan(dy/dx);
var da=180-(a1+a2);

var x=Math.tan(a2)*d/(Math.tan(a1)+Math.tan(a2))
var y=Math.tan(a1)*x;

var p={}
p.x=x
p.y=y
p.a=Math.atan(y/x);
var d=Math.sqrt(x*x+y*y);
p.r=d;
var xx=d*Math.cos(a+p.a);
var yy=d*Math.sin(a+p.a);
p.xx=xx;
p.yy=yy;

return p

}, 
 interByAngLn(inf={line1:{p1,p2},line2:{p1,p2}}){
    // var dx=
 }
 }



