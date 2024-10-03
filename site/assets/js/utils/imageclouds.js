  
export default function() {


  console.log('imageclouds' );
  const imageclouds = document.querySelectorAll('.imagecloud');


  if (!imageclouds) return;

  imageclouds.forEach(imagecloud => {
    const children = imagecloud.children;
    if (children.length > 0) {
      const randomChild = children[Math.floor(Math.random() * children.length)];
      randomChild.classList.replace('d-none', 'd-flex');
      
      setTimeout(() => {
        randomChild.dataset.scroll = 'in';
      }, 200);

      
    }
  });
 
}