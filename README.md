# OCR Service

A minimalist server that performs text extraction of image and PDF files, built in Express.

## Try it yourself

1. Clone the repo:

```shell
git clone https://github.com/ledg555/ocr-service.git
```

2. Enter the project folder:

```shell
cd ocr-service
```

3. Install the dependencies:

```shell
npm i
```

4. Start the server:

```shell
npm start
```

5. Test it!

```shell
curl -X PUT -F "file=@{YOUR-LOCAL-IMG-PATH}" http://localhost:3000/ocr
```

## The trick

At first I tried to use Tesseract.js to do the job, but it turns out that it's doesn't perform OCR nor text extraction on PDF files.

So I found scribe.js, which is built on top of Tesseract.js, handles both img and PDF files and is also capable of doing text extraction (without the need of OCR) if
the PDF has embeded text in it.

I wanted to use Nest.js, but due to some issues with Typescript and ES/Node modules I was unable to run the project successfully, so I ended up using Express in the end. Please let me know if you make it work seamlessly in Nest 😃
