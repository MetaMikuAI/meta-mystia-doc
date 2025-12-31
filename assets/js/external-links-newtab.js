document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('#mdbook-content a')?.forEach((a) => {
		const href = a.getAttribute('href');
		if (!href) {
			return;
		}

		if (href.startsWith('http://') || href.startsWith('https://')) {
			try {
				if (
					new URL(href, location.href).hostname !== location.hostname
				) {
					a.setAttribute('target', '_blank');
					a.setAttribute('rel', 'noopener noreferrer');
				}
			} catch {}
		}
	});
});
