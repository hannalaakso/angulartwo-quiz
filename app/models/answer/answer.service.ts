//TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular 
//may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';



import { AnswerGroup } from './answer-group';
import { ANSWERS } from './../../data/answer-groups';
import { Answer } from './answer';
//import { ANSWER } from './../../data/answers';

//The NoteService doesn't have any dependencies at the moment. Add the decorator anyway. It is a "best practice" 
//to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
@Injectable()
export class AnswerService {

	answerGroup: AnswerGroup;
	answers: Answer[] = [];
	correctAnswerChosen: boolean;

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
	getAnswerGroups(): Promise<AnswerGroup[]> {
		//debugger;
	  return Promise.resolve(ANSWERS);
	}

	getAnswerFeedBackMessage(answerGroup: AnswerGroup, selectedAnswer: Answer): String {

		debugger;

		var message;

		var isCorrectAnswer = false;
		var correctAnswerId = answerGroup.correctAnswerId;
		var selectedAnswerId = selectedAnswer.id;

		if (correctAnswerId === selectedAnswerId) isCorrectAnswer = true;

		if (isCorrectAnswer) {
			message = 'Congratulations! You chose the right answer: ' + selectedAnswer.text;
		} else {
			message = 'Sorry, you got this wrong. The correct answer was ' + selectedAnswer.text;
		}

		return message;






		// if (answerGroup.correctAnswer === selectedAnswer) {
		// 	console.log('test');
		// }

		// this.getAnswerGroups().then(function (answerGroups) {
	 //        that.answerGroup = answerGroups.find(answerGroups => answerGroups.id === id)
	 //        //debugger;
	 //        return that.answerGroup;
	 //      }).then(function (answerGroup) {
	 //      		      	console.log(answerGroup.realItems);


	       
	 //        //return that.answerService.getAnswersToQuestion(that.question.answersId);
	 //        //var id = Math.floor(Math.random()*questions.length);
	 //        //var randomQuestion = questions.find(question => question.id == id);
	 //         //debugger; debug missing questions here
	 //        return answerGroup;
	 //      }).catch(function (err) {
	 //        console.log(err);
	 //      });

	 	//var getCorrectAnswer = this.checkIfAnswerCorrect(answerGroup); 

	}

	getCorrectAnswer(answerGroup: AnswerGroup): boolean {
		// return this.getAnswerGroups()
	 //             .then(answerGroup => answerGroup.find(answerGroup => answerGroup.id === questionId));

		return false;
	}

	getAnswersToQuestion(questionId: number): Promise<AnswerGroup> {

		var that = this;
		// debugger;
		//get answers with same ids as in itemids
		//note promise return will be array of answers, not answer group 
		return this.getAnswerGroups()
	             .then(answerGroup => answerGroup.find(answerGroup => answerGroup.id === questionId));


	    // return this.getAnswerGroups().then(function (answerGroups) {
	    //     that.answerGroup = answerGroups.find(answerGroups => answerGroups.id === id)
	    //     //debugger;
	    //     return that.answerGroup;
	    //   }).then(function (answerGroup) {

	    //   	console.log(answerGroup.realItems);


	       
	    //     //return that.answerService.getAnswersToQuestion(that.question.answersId);
	    //     //var id = Math.floor(Math.random()*questions.length);
	    //     //var randomQuestion = questions.find(question => question.id == id);
	    //      //debugger; debug missing questions here
	    //     return answerGroup;
	    //   }).catch(function (err) {
	    //     console.log(err);
	    //   }); 


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
