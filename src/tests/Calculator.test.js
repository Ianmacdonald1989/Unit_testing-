import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';


describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 and 4 together to equal 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator-add')
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button4)
    fireEvent.click(addButton)
    fireEvent.click(button1)
    fireEvent.click(equalButton)


    expect(runningTotal.textContent).toEqual('5');
    
  })
  
  it('should subract 4 from 7 and to equal 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const subtractButton = container.getByTestId('operator-subtract')
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button7)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalButton)

    expect(runningTotal.textContent).toEqual('3')

    
  })

  it('should multiply 3 by 5 to equal 15', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalButton)

    expect(runningTotal.textContent).toEqual('15')
    
    
  })

  it('should divide 21 by 7 to equal 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7');
    const divideButton = container.getByTestId('operator-divide')
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalButton)

    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatanate 2,3,5 to equal 235', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5');
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button2)
    fireEvent.click(button3)
    fireEvent.click(button5)
    fireEvent.click(equalButton)

    expect(runningTotal.textContent).toEqual('235')
  })

  it('should chain 3 add 4 multiply by 7 to equal 49', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4')
    const button7 = container.getByTestId('number7');
    const addButton = container.getByTestId('operator-add')
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button3)
    fireEvent.click(addButton)
    fireEvent.click(button4)
    fireEvent.click(equalButton)
    fireEvent.click(multiplyButton)
    fireEvent.click(button7)
    fireEvent.click(equalButton)

    expect(runningTotal.textContent).toEqual('49')
  })

  it('should clear calculation 3 add 7 equal to 0', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button7 = container.getByTestId('number7');
    const clearButton = container.getByTestId('clear')
    const addButton = container.getByTestId('operator-add')
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(button3)
    fireEvent.click(addButton)
    fireEvent.click(button7)
    fireEvent.click(clearButton)
    fireEvent.click(equalButton)

    expect(runningTotal.textContent).toEqual('0')
  })
})