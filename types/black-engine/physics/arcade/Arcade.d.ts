export class Arcade extends System {
    private mBodies;
    private mPairs;
    private mContacts;
    private mBroadPhase;
    private mPairsHash;
    private mBoundsBody;
    private mBoundsLeft;
    private mBoundsRight;
    private mBoundsTop;
    private mBoundsBottom;
    private mGravity;
    private mIterations;
    private mSleepEnabled;
    delta: number;
    collisionInfo(colliderA: Collider, colliderB: Collider, cb: () => void, ctx: any, ...args: any[]): void;
    isColliding(bodyA: RigidBody, bodyB?: RigidBody, cb?: () => void, ctx?: any, ...args: any[]): boolean;
    onChildrenAdded(gameObject: any): void;
    onChildrenRemoved(gameObject: any): void;
    onComponentAdded(child: any, component: any): void;
    onComponentRemoved(child: any, component: any): void;
    private __addBody;
    private __removeBody;
    private __addCollider;
    private __removeCollider;
    private __addPairs;
    private __addPair;
    private __removePairs;
    private __solve;
    private __setBounds;
    set boundsEnabled(arg: boolean);
    set gravityX(arg: number);
    get gravityX(): number;
    set gravityY(arg: number);
    get gravityY(): number;
    set iterations(arg: number);
    get iterations(): number;
    set sleepEnabled(arg: boolean);
    get sleepEnabled(): boolean;
}
import { System } from '../../core/System';
import { Collider } from '../../colliders/Collider';
import { RigidBody } from '../RigidBody';
