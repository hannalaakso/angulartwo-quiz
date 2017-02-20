import { Component } from '@angular/core';
import { Question } from './../models/question/question';

export const QUESTIONS: Question[] = [
  {id: 0,  text: 'What is 1 + 1?', level: 1, answersId: 0 },
  {id: 1, text: 'Which year did man first land on the Moon?', level: 1, answersId: 1},
  {id: 2, text: 'How many moons does Mars have?', level: 2, answersId: 2 }
];

