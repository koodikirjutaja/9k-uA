/* võimaldab button-iga kopeerida etteantud teksti*/
let text = document.getElementById("text1").innerHTML;
  
const copyContent = async () => {
    
  try {
      
    await navigator.clipboard.writeText(text);
      
    console.log('Content copied to clipboard');
    
  } catch (err) {
      
    console.error('Failed to copy: ', err);
    }
  }
