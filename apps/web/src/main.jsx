import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

function injectTrackingScripts() {
	if (typeof window === 'undefined') return;
	if (!document.getElementById('hs-script-loader')) {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.id = 'hs-script-loader';
		s.async = true;
		s.defer = true;
		s.src = '//js-na2.hs-scripts.com/245320633.js';
		document.body.appendChild(s);
	}
	if (!document.getElementById('warmly-script-loader')) {
		const w = document.createElement('script');
		w.id = 'warmly-script-loader';
		w.defer = true;
		w.src = 'https://opps-widget.getwarmly.com/warmly.js?clientId=9e074525fead67fbad74dfc2bae444bc';
		document.body.appendChild(w);
	}
}

injectTrackingScripts();

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);