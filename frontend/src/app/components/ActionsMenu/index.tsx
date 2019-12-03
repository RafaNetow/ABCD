import React from 'react';
import '../../style.local.css';
import style from '../../style.local.css';
import { Button } from '../Button';
import { RouteComponentProps } from 'react-router';
import ContextMenu from 'axui-contextmenu';
import './style.css';
import { EmployeeActions } from 'app/containers/Employee/actions';

export namespace ActionsMenu {
  export interface Props extends RouteComponentProps<void> {
    employeeId: string;
    employeeStatus: boolean;
    actions: EmployeeActions;
  }

  export interface State {
    showMenu: boolean;
  }
}

export class ActionsMenu extends React.Component<ActionsMenu.Props> {
  state: ActionsMenu.State;
  menu: ContextMenu;

  constructor(props: ActionsMenu.Props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.menu = new ContextMenu({
      id: 'basic',
    });
  }

  toggleShowMenu(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  onMouseLeave() {
    this.setState({
      showMenu: false,
    });
  }

  goToEditEmployee = () => {
    this.props.history.push(`/employees/${this.props.employeeId}/edit`);
  }

  goToViewEmployee = () => {};

  goToArchiveEmployee = () => {};

  handleContextMenu = (e: any) => {
    e.preventDefault();

    this.menu.setMenu([
      {
        label: 'View',
        click: () => {
          this.props.history.push(`/employees/${this.props.employeeId}/view`);
        },
      },
      {
        label: 'Edit',
        click: () => {
          this.props.history.push(`/employees/${this.props.employeeId}/edit`);
        },
      },
      {
        label: this.props.employeeStatus ? 'Delete' : 'Unarchive',
        click: async () => {
          await this.props.actions.deleteEmployee(+this.props.employeeId);
          await this.props.actions.fetchEmployees();
        },
      },
    ]);
    this.menu.popup({ x: e.pageX, y: e.pageY });
  }

  render() {
    return (
      <div onClick={this.handleContextMenu}>
        <Button>
          <a className={style['btn-icon']}>
            <i className={`${style.icon} ${style['i-more-1']}`} />
          </a>
        </Button>
      </div>
    );
  }
}
