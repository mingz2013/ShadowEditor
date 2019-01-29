var ID = -1;

/**
 * 帮助器基类
 * @author tengge / https://github.com/tengge1
 */
function BaseHelper(object) {
    this.object = object;
    this.id = `${this.constructor.name}${ID--}`;

    THREE.Object3D.call(this);
}

BaseHelper.prototype = Object.create(THREE.Object3D.prototype);
BaseHelper.prototype.constructor = BaseHelper;

BaseHelper.prototype.update = function () {

};

BaseHelper.prototype.dispose = function () {
    delete this.object;
};

export default BaseHelper;