const Products = async () => {
    const request = await fetch('', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
  
    return response;
  };
  
  export { Products };
  