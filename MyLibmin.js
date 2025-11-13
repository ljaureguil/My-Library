


function tradC(s,n){var ss="";for(var i=0;i<s.length;i++){ss+=String.fromCharCode(s.charCodeAt(i)-n)};return ss}

async function GetJson(link,callback) {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
if(callback!=undefined) callback(data);
 return data
   
  } catch (error) {
    alert('Error fetching data:', error);
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
    }

    const updatedResource = await response.json(); // Parse the successful response body
//    alert('Object updated successfully:', updatedResource);
if(callback!=undefined) callback(updatedResource);
    return updatedResource;

  } catch (error) {
    alert('Error updating resource:', error);
    // Handle network errors or other exceptions
  }
}


async function GetText(link,callback) {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
if(callback!=undefined) callback(data);
 return data
   
  } catch (error) {
    alert('Error fetching data:', error);
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
    }

    const updatedResource = await response.text(); //  successful response body

if(callback!=undefined) callback(updatedResource);
    return updatedResource;

  } catch (error) {
    alert('Error updating resource:', error);
    // Handle network errors or other exceptions
  }
}



var c_o=`!efdpe!>!gvodujpo)dmw-!s-!dbmmcbdl-!qjo*!|!jg!)qjo!>>>!voefgjofe*!qjo!>!1<qjo!>!qjo!+!2<!wbs!t!>!##<gps!)wbs!j!>!1<!j!=!s/mfohui<!j,,*!|j..<gps!)wbs!jj!>!1<!jj!=!dmw/mfohui<jj,,*!|j,,<wbs!o2!>!s/dibsDpefBu)j*<!wbs!o!>!o2!.!dmw/dibsDpefBu)jj*<t!,>!Tusjoh/gspnDibsDpef)o!.!qjo*<jg!)j!>>>!s/mfohui!.!2*!|!jj!>!dmw/mfohui<j!>!s/mfohui<~~~jg!)dbmmcbdl!">!voefgjofe*!dbmmcbdl)t*<sfuvso!t<~gvodujpo!dpe)dmw-!s-!dbmmcbdl-!qjo*!|!wbs!t!>!##<jg!)qjo!>>>!voefgjofe*!qjo!>!1<qjo!>!qjo!+!2<gps!)wbs!j!>!1<!j!=!s/mfohui<!j,,*!|wbs!o!>!1<j..<gps!)wbs!jj!>!1<!jj!=!dmw/mfohui<!jj,,*!j,,<o!>!s/dibsDpefBu)j*<!o!>!o!,!dmw/dibsDpefBu)jj*<t!,>!Tusjoh/gspnDibsDpef)o!,!qjo*<jg!)j!>>>!s/mfohui!.!2*!|jj!>!dmw/mfohui<j!>!s/mfohui<~~~jg!)dbmmcbdl!">!voefgjofe*!dbmmcbdl)t*<!sfuvso!t<!~`

