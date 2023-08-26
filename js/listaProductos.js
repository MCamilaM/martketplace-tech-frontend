const datos = [
    { id: 1, name: 'Tecno Camon 20', year: 2023, category: 'Gama Media', quantity: 12, price: 2000000 },
    { id: 2, name: 'Redmi Note 11s', year: 2022, category: 'Gama Media', quantity: 2, price: 890000 },
    { id: 3, name: 'Iphone 14', year: 2023, category: 'Gama Alta', quantity: 4, price: 6000000 },
    { id: 4, name: 'Huawei P60 pro', year: 2023, category: 'Gama Alta', quantity: 3, price: 5000000 },
    { id: 5, name: 'Xiaomi 13', year: 2023, category: 'Gama Alta', quantity: 7, price: 4500000 },
    { id: 6, name: 'Iphone 11', year: 2019, category: 'Gama Alta', quantity: 15, price: 1500000 },
    { id: 7, name: 'Redmi Note 12s', year: 2023, category: 'Gama Media', quantity: 1, price: 989000 },
    { id: 8, name: 'Oppo Reno 7', year: 2022, category: 'Gama Media', quantity: 9, price: 1200000 },
    { id: 9, name: 'Infinix Hot 30', year: 2023, category: 'Gama Media', quantity: 8, price: 899000 },
    { id: 10, name: 'Samsung S22', year: 2022, category: 'Gama Alta', quantity: 7, price: 4000000 }
];


  const tablaBody = document.getElementById('tabla-body');

  datos.forEach((dato) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${dato.id}</td>
      <td>${dato.name}</td>
      <td>${dato.price}</td>
      <td>${dato.quantity}</td>
      <td>${dato.category}</td>
      <td>
        <button class="btn btn-primary btn-sm">Editar</button>
        <button class="btn btn-danger btn-sm eliminar-btn">Eliminar</button>
      </td>
      `;

      const eliminarBtn = fila.querySelector('.eliminar-btn');
      eliminarBtn.addEventListener('click', () => {
        // Encuentra el índice del objeto a eliminar en el arreglo 'datos'
        const index = datos.findIndex(producto => producto.id === dato.id);
        if (index !== -1) {
          // Elimina el objeto del arreglo 'datos'
          datos.splice(index, 1);
          // Elimina la fila de la tabla
          fila.remove();
        }
      });
    
      tablaBody.appendChild(fila);
    });

  