import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from "lodash";
//import _ from "lodash";

console.log('lodash version:', _.VERSION);

import { Note } from './../../old-modules/note';
import { NoteService } from './../../old-modules/note.service';

import { Question } from './../../models/question/question';
import { QuestionService } from './../../models/question/question.service';

import { AnswerGroup } from './../../models/answer/answer-group';
import { AnswerService } from './../../models/answer/answer.service';

import { Answer } from './../../models/answer/answer';


@Component({
  selector: 'my-quiz',
  templateUrl: 'app/components/quiz/quiz.component.html',
  styleUrls: [ 'app/components/quiz/quiz.component.css' ],
  providers: [QuestionService, AnswerService]
})

export class QuizComponent implements OnInit {

  questions: Question[] = [];
  question: Question[] = [];
   // question: Question;
 // answers: AnswerGroup[] = [];
  answerGroup: AnswerGroup[] = [];
  getQuestionButtonText = 'Skip this question';

  //note: Note;
  //Define a notes array property.
  //notes: Note[] = [];
  //notes: Note[];
  count: number;
  priorityNotes: Note[];
  date: Date = new Date();

  answerFeedBackMessage: String;


  //Inject the NoteService in the constructor and hold it in a private noteService field.
  constructor(
    private router: Router,
    private noteService: NoteService,
    private questionService: QuestionService, 
    private answerService: AnswerService) { 
  }

 onSelectionChange(answerGroup: AnswerGroup, selectedAnswer: Answer) {
   console.log(selectedAnswer);
      //this.selectedEntry = entry;
    //this.getCorrectAnswer(answerGroup, selectedAnswer);
    this.answerFeedBackMessage = this.answerService.getAnswerFeedBackMessage(answerGroup, selectedAnswer);
    this.getQuestionButtonText = 'Show me the next question!';
  }

  showNextQuestion(): void {
    debugger;
    this.answerFeedBackMessage = "";
    this.getRandomQuestion();
    this.getQuestionButtonText = 'Skip this question';
  }

  getCorrectAnswer(answerGroup: AnswerGroup, selectedAnswer: Answer): void {

    //

    //


  }

  getAnswers(): void {
    var that = this;

    //get answerid from randomquestion
    //get answer that matches that id


    // that.answerService.getAnswers().then(function(data){
    //  debugger;

    //   that.relevantAnswers = _.find(data, function (o){
    //     debugger;
    //     return o.id === 1;
    //   });

    // });


    // var getMatchingAnswers = function () {
    //     this.answerService.getAnswers()
    //       // .then()
    //       .then(function () {
    //         _.find(this.answers, function (o){
    //           debugger;
    //           console.log(o.answersId === 1);
    //           console.log('test');
           
    //       })
    //       // .catch(function (error) {
    //       //   // if there are any errors in promise chain
    //       //   // we can catch them in one place, yay!
    //       // });
    // };

    // this.answerService.getAnswers()
    //   // .then(
    //   //     relevantAnswers => _.find(this.answers, function (o){debugger;console.log(o.answersId === 1);console.log('test');
    //   //       //return;
    //   //   });
  }

  getQuestions(): void {
    this.questionService.getQuestions().then(questions => this.questions = questions);
  }

  getRandomQuestion(): void {

    var that = this;
   // debugger;
         //this.getQuestions();

         // this.questionService.getQuestions()
         //   .then(questions => this.questions = questions);
           ///var id = Math.floor(Math.random()*this.questions.length);
           //debugger;
             // this.questionService.getRandomQuestion()
             //   .then(question => this.question = question)
             //   .then(relevantAnswers => this.relevantAnswers = this.answerService.getAnswersToQuestion(this.question.answerId));

             //debugger;

            this.questionService.getRandomQuestion().then(function (question) {
                that.question = question;
               // debugger;
              }).then(function (question) {
                //debugger;
                //return that.answerService.getAnswersToQuestion(that.question.answersId);
                return that.getAnswers(that.question.answerGroupId);
              }).then(function (answerGroup) {
                //debugger;
                 that.answerGroup = answerGroup;
                 // debugger;
              }).catch(function (err) {
                console.log(err);
              }); 
               

             //debugger;

         // articleService.getArticles('angular')
         //  .then(function(articles){
         //      return articles.length;
         //  })
         //  .then(function(count){
         //      //count is equal to articles.length here since the derived promise was resolved with the article count
         //      console.log(count);
         //  });


    //this.questionService.getRandomQuestion((Math.floor(Math.random()*this.questions.length))).then(randomQuestion => this.randomQuestion = randomQuestion);
  }

  getAnswers(answerGroupId): void {
    return this.answerService.getAnswersToQuestion(answerGroupId);
  }

  //Call the service to get notes inside the Angular ngOnInit lifecycle hook.
  ngOnInit(): void {

    var that = this;

    //this.getAnswers();

    // this.getQuestions();
     this.getRandomQuestion();

   // this.noteService.getNotes().then(
   //   notes => that.notes = notes     
   // );

   // this.noteService.getNotes().then(function(notes) {

   //    for( var i = 0; i < that.notes.length; i++ ){
   //      if( that.notes[ i ].highPriority === true ){
   //        that.priorityNotes[i] = that.notes[ i ];
   //                  //break;
   //      }
   //    };        // do whatever with res here
   //  });

   // this.noteService.getDate().then(date => this.date = date);



   // this.priorityNotes = this.notes.filter(

   //        note => note.highPriority === true
   //        );

   //  // this.noteService.getNotes()
   //  //     //Cherry-pick four notes (2nd, 3rd, 4th, and 5th)
    //   .then(notes => this.notes = notes.slice(1, 5));

    // this.noteService.getPriorityNotes()
    //   .then(priorityNotes => this.priorityNotes = priorityNotes);

    // this.noteService.getNotesCount()
    //   .then(count => this.count = count);

      //var test = Note[];
      
   }

   // debugger;

   //    for( var i = 0; i < this.notes.length; i++ ){
   //      debugger;
   //      if( this.notes[ i ].highPriority === true ){
   //        this.priorityNotes[i] = this.notes[ i ];
   //        debugger;
   //                  //break;
   //      }
   //    };  

     //We don't really need a dedicated method to wrap one line. We write it anyway:  
  // getNotes(): void {
  //   //we're now setting this.notes to a Promise rather than an array of notes.
  //   //Our callback sets the component's notes property to the array of notes returned by the service.   
  //    this.noteService.getNotes().then(notes => this.notes = notes);
  // }


  // getPriorityNotes(): void {
  //   //we're now setting this.notes to a Promise rather than an array of notes.
  //   //Our callback sets the component's notes property to the array of notes returned by the service.   
  //    this.noteService.getPriorityNotes().then(notes => this.notes = notes);
  // }  

  // ngOnInit(): void {
  //   this.getPriorityNotes();
  // }

  // gotoDetail(note: Note): void {
  //   let link = ['/detail', note.id];
  //   this.router.navigate(link);
  // }
}