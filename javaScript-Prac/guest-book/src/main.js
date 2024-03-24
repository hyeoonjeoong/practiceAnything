function addComment() {
  let num = 1;

  const name = document.querySelector('[name=name]').value;
  const content = document.querySelector('[name=content]').value;
  const date = new Date();
  const dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${num}</td>
    <td>${name}</td>
    <td>${content}</td>
    <td>${dateString}</td>
    <td><button onClick="deleteComment(event)">삭제하기</button></td>`;

  const tbody = document.querySelector('tbody');
  tbody.append(tr);

  num++;
}

function remove() {
  document.querySelector('.name').value = '';
  document.querySelector('.content').value = '';
}

function deleteComment(event) {
  // 클릭한 <td>의 부모인 <tr>을 삭제
  const td = event.target.parentNode;
  const tr = td.parentNode;
  tr.remove();
}
