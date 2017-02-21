import { Component } from '@angular/core';
import { AnswerGroup } from './../models/answer/answer-group';

export const ANSWERS: AnswerGroup[] = [
  {id: 0, itemIds: [0, 1], items: ['test', 'test1'], correctAnswer: 1},
  {id: 1, itemIds: [2, 3], items: ['tes2', 'test3'], correctAnswer: 3},
  {id: 2, itemIds: [4, 5], items: ['test4', 'test5'], correctAnswer: 5}
];
