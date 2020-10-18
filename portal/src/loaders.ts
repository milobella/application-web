type Resolve = () => void;
type Reject = (error: ErrorEvent) => void;

function createScriptElement(resolve: Resolve, reject: Reject): HTMLScriptElement {
  const script = document.createElement('script');
  script.addEventListener('load', () => resolve());
  script.addEventListener('error', error => reject(error));
  return script;
}

export function loadAngularScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const moduleScript = createScriptElement(resolve, reject);
    moduleScript.type = 'module';
    moduleScript.src = `${url}/main-es2015.js`;

    const noModuleScript = createScriptElement(resolve, reject);
    noModuleScript.noModule = true;
    noModuleScript.src = `${url}/main-es5.js`;

    document.head.appendChild(moduleScript);
    document.head.appendChild(noModuleScript);
  });
}
