ReactDOM.render(
    React.createElement(
        'table',
        null,
        React.createElement(
            'tr',
            null,
            React.createElement(
                'th',
                null,
                'Firstname',
                React.createElement('th', null, 'Lastname',


                ),


                document.getElementById('root')
            ),
        ),
    ),



    //   <tr>
    //     <th>Firstname</th>
    //     <th>Lastname</th>
    //   </tr>
    //   <tr>
    //     <td>Janet</td>
    //     <td>James</td>
    //   </tr>
    //   <tr>
    //     <td>John</td>
    //     <td>Jameson</td>
    //   </tr>



    {/* <ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
)) */}

// ReactDOM.render(
//   React.createElement(
//     'ul',
//     null,
//     React.createElement('li', null, 'Item 1'),
//     React.createElement('li', null, 'Item 2'),
//     React.createElement('li', null, 'Item 3'),
//   ),
//   document.getElementById('root')
// );
// Here the ul has 3 children, not just 1 as we've seen before.

// Or maybe a more complex list

// <ul>
//   <li>Item 1</li>
//     <ul>
//       <li>Price 1</li>
//     </ul>
//   <li>Item 2</li>
//     <ul>
//       <li>Price 2</li>
//     </ul>
//   </li>
// </ul>
// ReactDOM.render(
//   React.createElement(
//     'ul',
//     null,
//     React.createElement(
//       'li',
//       null,
//       'Item 1',
//       React.createElement(
//         'ul',
//         null,
//         React.createElement('li', null, 'Price 1')
//       )
//     ),
//     React.createElement(
//       'li',
//       null,
//       'Item 2',
//       React.createElement(
//         'ul',
//         null,
//         React.createElement('li', null, 'Price 2')
//       )
//     )
//   ),
//   document.getElementById('root')
// );