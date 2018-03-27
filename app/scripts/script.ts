const h2Node = document.getElementsByTagName('h2');
// 吹き替え.
const re = /吹替/;

if (h2Node.length > 0) {
    for (let i = 0; i < h2Node.length; i++) {
        let elm = (h2Node[i] as HTMLElement);
        if (elm) {
            const str = elm.innerText;
            const myArray = str.match(re);
            if (myArray) {
                const node = elm as Node;
                if (node) {
                    const parent = node.parentNode;
                    if (parent) {
                        const granpa = parent.parentNode;
                        if (granpa) {
                            const grandgranpa = granpa.parentNode;
                            (grandgranpa as HTMLElement).remove();
                            (grandgranpa as HTMLElement).style.display = 'none';
                        }
                    }
                }
            }
        }
    }
}

