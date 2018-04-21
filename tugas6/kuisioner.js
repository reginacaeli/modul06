function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('1. Apakah JavaScript bahasa pemroghraman paling keren sedunia?',
	['Ya', 'Tidak', 'Biasa Saja'],
	'0'); 
	var q2 = new Question('Siapa dosen yang mengajar kuliah ini?',
	['Adi', 'Padosroha', 'Oskar'],
	'2');
	var q3 = new Question('Kata yang paling bagus mendeskripsikan koding',
	['Bosan', 'Susah', 'Bahagia'],
	'2');
	var q4 = new Question('Tag yang digunakan untuk ganti baris',
	['<a>', '<b>','<p>','<br>'],
	'3');
	var q5 = new Question('Tag HTML untuk menampilkan gambar adalah?',
	['< src img=”file.jpg”>', '< scr img=”file.jpg”>', '< img src=”file.jpg”>'],
	'2');
    var q6 = new Question('Bahasa pemrograman yang ditempatkan/ditempelkan pada HTML dan akan diproses oleh web client adalah',
	['Javascript', 'ASP','PHP'],
	'2');
    var q7 = new Question('Tag yang digunakan untuk membuat paragraf adalah',
	['< p>', '< b>'],
	'0');
    var q8 = new Question('Type yang berfungsi untuk menerima masukan berupa teks dari pengguna adalah ?',
	['Checkbox', 'Text'],
	'1');
    var q9 = new Question('Kepanjangan HTML adalah?',
	['Hyper Text Manual Language', 'Hyper Text Mark-up Language'],
	'1');
    var q10 = new Question('type form HTML untuk menerima masukan berupa pilihan, dan pilihan yang dapat dipilih bisa lebih dari satu adalah?',
	['Checkbox', 'Radio'],
	'0');
    
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};