package com.inso_world.binocular.infrastructure.sql.persistence.dao.interfaces

import com.inso_world.binocular.infrastructure.sql.persistence.entity.AccountEntity

internal interface IAccountDao : IDao<AccountEntity, Long> {

    fun findExistingGid(gids: List<String>): Iterable<AccountEntity>
}
