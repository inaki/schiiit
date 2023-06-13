export const createAppendPortal = (tag, id) => {
    const portalRoot = document.createElement(tag);
    portalRoot.id = id;
    document.body.appendChild(portalRoot);
    return portalRoot;
};
