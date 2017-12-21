class TodoList extends React.Component {
    render() {
        return (
            
            <div ref={component => this.renderedDiv = component}>
                
        <TodoList item1='Sign up for code review' />
        <TodoList item2='Finish TodoList component' />
        <TodoList item3='Get lots of sleep' />
    </div>,   
      
        );
    }
}

ReactDOM.render(
  
    document.getElementById('root')


//   <TodoList title="Student todo" items={['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep']}