//import { Component } from '@angular/core';
import { Note } from './note';

export const NOTES: Note[] = [
  {id: 11, name: 'Buy milk', highPriority: true, text: 'From the shop'},
  { id: 12, name: 'Go to post office', highPriority: true, text: 'Buy some stamps' },
  { id: 13, name: 'Buy insurance', highPriority: false, text: 'Do this before insurance expires' },
  { id: 14, name: 'Call Mum', highPriority: false, text: 'On Sunday' },
  { id: 15, name: 'Buy Christmas presents', highPriority: false, text: 'Make a list' },
  { id: 16, name: 'Book train tickets', highPriority: false, text: 'For holidays'},
  { id: 17, name: 'Go to bank', highPriority: false, text: 'Change address' },
  { id: 18, name: 'Pay bills', highPriority: false, text: 'Before the end of the month' },
  { id: 19, name: 'Hoover', highPriority: false, text: 'On Saturday morning' }
];
