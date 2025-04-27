import "./App.css";
// This is for development purpose only from here I need to show what the widget looks like.
// In a real-world scenario, the widget would be auto-discovered and injected into the page.
function App() {
  return (
    <div className="app">
      <h1>Widget Development Environment</h1>
      <h2>This is just demo</h2>
      <hr />
      <h2>Widget Preview</h2>
      <p>This is without using custom questions and categories</p>
      <div className="faq-widget"></div>
      <p>This is with using custom questions and categories</p>
      <div
        className="faq-widget"
        data-title="Frequently Asked Questions"
        data-faqs='[
      {"question": "What is this widget?", "answer": "It is an FAQ widget.", "category": "General"},
      {"question": "How do I use it?", "answer": "Embed it into your site.", "category": "Technical"},
      {"question": "Is it free?", "answer": "Yes, it is free to use.", "category": "General"}
    ]'
        data-categories='["General", "Technical"]'
        data-theme="dark"
      ></div>
    </div>
  );
}

export default App;
