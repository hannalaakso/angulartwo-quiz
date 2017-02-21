//TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular 
//may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';

import { AnswerGroup } from './answer-group';
import { ANSWERS } from './../../data/answer-groups';

//The NoteService doesn't have any dependencies at the moment. Add the decorator anyway. It is a "best practice" 
//to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
@Injectable()
export class AnswerService {

	ngOnInit(): void {
		var that = this;

	}

	// getQuestion(id: number): Promise<Question> {
	// 	return this.getQuestions()
	// 			.then(questions => questions.find(question => question.id == id));
	// }

	// getRandomQuestion(): Promise<Question> {

	// 	//debugger;
	// 	return this.getQuestions()

	// 		.then(
	// 			questions => questions.find(question => question.id == Math.floor(Math.random()*questions.length))
	// 			)
	// 		.catch(function (err) {
	//             console.log(err.message);
	//             console.log(err.stack);
	//         });
	// }

	// // getRandomQuestion(): Promise<Question> {
	// // 	return this.getQuestions()	
	// // 			.then(questions => questions.find(question => question.id == id));
	// // 			//.then(questions => questions.find(question => (Math.floor(Math.random()*questions.length)) == id));		
	// // }

	// // getNote(id: number): Promise<Note> {
	// //   return this.getNotes()
	// //              .then(notes => notes.find(note => note.id === id));
	// // }

	// //return results asynchronously
	getAnswers(): Promise<AnswerGroup[]> {
		//debugger;
	  return Promise.resolve(ANSWERS);
	}

	getAnswersToQuestion(id: number): Promise<AnswerGroup> {
		// debugger;
		//get answers with same ids as in itemids
		//note promise return will be array of answers, not answer group 
		return this.getAnswers()
	             .then(answerGroup => answerGroup.find(answerGroup => answerGroup.id === id));


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
