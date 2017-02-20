import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from './../../models/question/question';
import { QuestionService } from './../../models/question/question.service';
import { NoteService } from './../../old-modules/note.service';


@Component({
  selector: 'question',
  templateUrl: 'app/components/question/question.component.html',
  styleUrls: [ 'app/components/question/question.component.css' ],
  providers: [QuestionService]
})

export class QuestionComponent implements OnInit {

	// questions: Question[];

	constructor(
		private router: Router,
		private questionService: QuestionService) 
	{ 
	}

	ngOnInit(): void {
	    var that = this;

	    //this.getQuestions();
	    //debugger;

	    		//this.questionService.getQuestions().then(questions => this.questions = questions);

	}

	// getQuestions(): void {

	// 	this.questionService.getQuestions().then(questions => this.questions = questions);
	// }

}