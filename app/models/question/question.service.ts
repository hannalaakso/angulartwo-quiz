//TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular 
//may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';

import { Question } from './question';
import { QUESTIONS } from './../../data/questions';

//The NoteService doesn't have any dependencies at the moment. Add the decorator anyway. It is a "best practice" 
//to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
@Injectable()
export class QuestionService {

	 questions: Question[] = [];

	ngOnInit(): void {
		var that = this;

	}

	getQuestion(id: number): Promise<Question> {
		return this.getQuestions()
				.then(questions => questions.find(question => question.id == id));
	}

	getRandomQuestion(): Promise<Question> {

		var that = this;



		// return this.getQuestions()
  //          .then(questions => this.questions = questions)
  //          .then(questions => questions.find(question => question.id == Math.floor(Math.random()*questions.length)));


           return this.getQuestions().then(function (questions) {
                //that.questions = questions;
                //debugger;
                return questions;
              }).then(function (questions) {
               
                //return that.answerService.getAnswersToQuestion(that.question.answersId);
                var id = Math.floor(Math.random()*questions.length);
                var randomQuestion = questions.find(question => question.id == id);
                 //debugger; debug missing questions here
                return randomQuestion;
              }).catch(function (err) {
                console.log(err);
              }); 

  //         this.questionService.getRandomQuestion()
  //         .then(question => this.question = question);

		// //debugger;
		// return this.getQuestions()

		// 	.then(
		// 		questions => questions.find(question => question.id == Math.floor(Math.random()*questions.length))
		// 		)
		// 	.catch(function (err) {
	 //            console.log(err.message);
	 //            console.log(err.stack);
	 //        });
	}

	// getRandomQuestion(): Promise<Question> {
	// 	return this.getQuestions()	
	// 			.then(questions => questions.find(question => question.id == id));
	// 			//.then(questions => questions.find(question => (Math.floor(Math.random()*questions.length)) == id));		
	// }

	// getNote(id: number): Promise<Note> {
	//   return this.getNotes()
	//              .then(notes => notes.find(note => note.id === id));
	// }

	//return results asynchronously
	getQuestions(): Promise<Question[]> {
		//debugger;
	  return Promise.resolve(QUESTIONS);
	}	

	// getQuestion(id: number): Promise<Question> {
	//   return this.getQuestions()
	//              .then(questions => questions.find(question => question.id === id));
	// }

	// getQuestionsCount(): Promise<number> {
	// 	return this.getQuestions()
	// 			.then(count => Object.keys(count).length);
	// }

	// getQuestionsSlowly(): Promise< Question[]> {
	//   return new Promise<Question[]>(resolve =>
	//     setTimeout(resolve, 2000)) // delay 2 seconds
	//     .then(() => this.getQuestions());
	// }

}
