import { Component } from '@angular/core';
import { AnswerGroup } from './../models/answer/answer-group';
import { Answer } from './../models/answer/answer';

export const ANSWERS: AnswerGroup[] = [
  {
  	id: 0, 
  	correctAnswerId: 1, 
  	realItems: [
	  	{id: 0, text: 'test'},
	  	{id: 1, text: 'test1'}
	]
  },
  {
  	id: 1, 
  	correctAnswerId: 1, 
  	realItems: [
	  	{id: 0, text: 'test'},
	  	{id: 1, text: 'test1'}
	]
  },
  {
  	id: 2, 
  	correctAnswerId: 1, 
  	realItems: [
	  	{id: 0, text: 'test'},
	  	{id: 1, text: 'test1'}
	]
  }
  
];
