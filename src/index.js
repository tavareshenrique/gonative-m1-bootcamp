import React, { Component } from 'react';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';
import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'Fazer exercicio' }, { id: 1, text: 'Estudar GoNative' }],
  };

  // static getDerivedStateFromProps(nextProps, prevStat) {
  //   // Executa antes do componentDidMount()
  //   // Executado antes de qualquer atualização de props ou state
  //   return { text: nextProps.text };
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // Executa a cada atualização antes mesmo do componente atualizar
  //   // Ele decide se o componente deve atualizar ou não
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // É executado depois do componente executar o método render()
  // }

  // componentWillUnmount() {
  //   // É executado no instante ante do componente ser desmontado;
  // }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo Todo' }],
    });
  };

  render() {
    console.tron.log('hello');
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo1" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
