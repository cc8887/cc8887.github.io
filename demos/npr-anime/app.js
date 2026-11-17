const cases={"baseline":{"title":"普通二分","desc":"统一阈值与原始法线，作为其他案例的对照。"},"normals":{"title":"形体与法线控制","desc":"着色时混合法线，使面部明暗更整体；未真正修改模型顶点法线。夸张参数可能压平眼鼻结构。"},"threshold":{"title":"局部阈值","desc":"不同区域使用不同阈值，让明暗交界服务于美术造型。"},"face":{"title":"面部阈值图","desc":"预绘灰度图决定每处何时变暗；本例采用平面投影，不是真正的 SDF，也不是固定黑白遮罩。"},"highlight":{"title":"艺术化条带高光","desc":"单独设计高光形状；不是 Unity Angel Ring 或物理头发着色。猴头没有真实头发，无法验证发型效果。"},"combined":{"title":"组合设计","desc":"法线、局部阈值、面部控制与高光叠加。用于解释控制手段，不是最终美术质量。"}};
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
const id=button.dataset.case,item=cases[id];
document.querySelector('#selected-image').src='images/'+id+'.png';
document.querySelector('#selected-image').alt=item.title+'的 NPR 渲染';
document.querySelector('#selected-title').textContent=item.title;
document.querySelector('#selected-desc').textContent=item.desc;
document.querySelectorAll('[data-case]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
}));